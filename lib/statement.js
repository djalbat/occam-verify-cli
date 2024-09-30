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
var _unify = /*#__PURE__*/ _interop_require_wildcard(require("./mixins/unify"));
var _statementAsCombinator = /*#__PURE__*/ _interop_require_default(require("./verifier/statementAsCombinator"));
var _node = require("./utilities/node");
var _verify = require("./mixins/verify");
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
var unifyFunctions = [
    _unify.unifyWithBracketedCombinator,
    _unify.unifyWithCombinators
], verifyFunctions = [
    _verify.verifyAsMetavariable,
    _verify.verifyAsEquality,
    _verify.verifyAsFrame,
    _verify.verifyAsJudgement,
    _verify.verifyAsDeclaration,
    _verify.verifyAsTypeAssertion,
    _verify.verifyAsDefinedAssertion,
    _verify.verifyAsSubproofAssertion,
    _verify.verifyAsContainedAssertion
];
var Statement = /*#__PURE__*/ function() {
    function Statement(string, node) {
        _class_call_check(this, Statement);
        this.string = string;
        this.node = node;
    }
    _create_class(Statement, [
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
            key: "unify",
            value: function unify(assignments, stated, localContext) {
                var unified;
                var statement = this, statementString = this.string; ///
                localContext.trace("Unifying the '".concat(statementString, "' statement..."));
                unified = unifyFunctions.some(function(unifyFunction) {
                    var unified = unifyFunction(statement, assignments, stated, localContext);
                    if (unified) {
                        return true;
                    }
                });
                if (unified) {
                    localContext.debug("...unified the '".concat(statementString, "' statement."));
                }
                return unified;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified;
                var statement = this, statementString = this.string; ///
                localContext.trace("Verifying the '".concat(statementString, "' statement..."));
                verified = verifyFunctions.some(function(verifyFunction) {
                    var verified = verifyFunction(statement, assignments, stated, localContext);
                    if (verified) {
                        return true;
                    }
                });
                if (verified) {
                    localContext.debug("...verified the '".concat(statementString, "' statement."));
                }
                return verified;
            }
        },
        {
            key: "verifyAsCombinator",
            value: function verifyAsCombinator(fileContext) {
                var verifiedAsCombinator;
                var statementNode = this.node, statementString = this.string; ///
                fileContext.trace("Verifying the '".concat(statementString, "' statement as a combinator..."));
                verifiedAsCombinator = _statementAsCombinator.default.verifyStatement(statementNode, fileContext);
                if (verifiedAsCombinator) {
                    fileContext.debug("...verified the '".concat(statementString, "' statement as a combinator."), statementNode);
                }
                return verifiedAsCombinator;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(fileContext) {
                var string = this.string, json = {
                    string: string
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string, statementString = string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), node = statementNode, statement = new Statement(string, node);
                return statement;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, fileContext) {
                var node = statementNode, string = fileContext.nodeAsString(node), statement = new Statement(string, node);
                return statement;
            }
        }
    ]);
    return Statement;
}();
Object.assign(_shim.default, {
    Statement: Statement
});
Object.assign(Statement.prototype, _unify.default);
var _default = Statement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi9taXhpbnMvdW5pZnlcIjtcbmltcG9ydCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9zdGF0ZW1lbnRBc0NvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgdW5pZnlXaXRoQ29tYmluYXRvcnMsIHVuaWZ5V2l0aEJyYWNrZXRlZENvbWJpbmF0b3IgfSBmcm9tIFwiLi9taXhpbnMvdW5pZnlcIjtcbmltcG9ydCB7IHZlcmlmeUFzTWV0YXZhcmlhYmxlLFxuICAgICAgICAgdmVyaWZ5QXNFcXVhbGl0eSxcbiAgICAgICAgIHZlcmlmeUFzRnJhbWUsXG4gICAgICAgICB2ZXJpZnlBc0p1ZGdlbWVudCxcbiAgICAgICAgIHZlcmlmeUFzRGVjbGFyYXRpb24sXG4gICAgICAgICB2ZXJpZnlBc1R5cGVBc3NlcnRpb24sXG4gICAgICAgICB2ZXJpZnlBc0RlZmluZWRBc3NlcnRpb24sXG4gICAgICAgICB2ZXJpZnlBc1N1YnByb29mQXNzZXJ0aW9uLFxuICAgICAgICAgdmVyaWZ5QXNDb250YWluZWRBc3NlcnRpb24gfSBmcm9tIFwiLi9taXhpbnMvdmVyaWZ5XCI7XG5cbmNvbnN0IHVuaWZ5RnVuY3Rpb25zID0gW1xuICAgICAgICB1bmlmeVdpdGhCcmFja2V0ZWRDb21iaW5hdG9yLFxuICAgICAgICB1bmlmeVdpdGhDb21iaW5hdG9yc1xuICAgICAgXSxcbiAgICAgIHZlcmlmeUZ1bmN0aW9ucyA9IFtcbiAgICAgICAgdmVyaWZ5QXNNZXRhdmFyaWFibGUsXG4gICAgICAgIHZlcmlmeUFzRXF1YWxpdHksXG4gICAgICAgIHZlcmlmeUFzRnJhbWUsXG4gICAgICAgIHZlcmlmeUFzSnVkZ2VtZW50LFxuICAgICAgICB2ZXJpZnlBc0RlY2xhcmF0aW9uLFxuICAgICAgICB2ZXJpZnlBc1R5cGVBc3NlcnRpb24sXG4gICAgICAgIHZlcmlmeUFzRGVmaW5lZEFzc2VydGlvbixcbiAgICAgICAgdmVyaWZ5QXNTdWJwcm9vZkFzc2VydGlvbixcbiAgICAgICAgdmVyaWZ5QXNDb250YWluZWRBc3NlcnRpb25cbiAgICAgIF07XG5cbmNsYXNzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgdW5pZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICB1bmlmaWVkID0gdW5pZnlGdW5jdGlvbnMuc29tZSgodW5pZnlGdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5RnVuY3Rpb24oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgdmVyaWZpZWQgPSB2ZXJpZnlGdW5jdGlvbnMuc29tZSgodmVyaWZ5RnVuY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkID0gdmVyaWZ5RnVuY3Rpb24oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBc0NvbWJpbmF0b3IoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBc0NvbWJpbmF0b3I7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGNvbWJpbmF0b3IuLi5gKTtcblxuICAgIHZlcmlmaWVkQXNDb21iaW5hdG9yID0gc3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIudmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllZEFzQ29tYmluYXRvcikge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBjb21iaW5hdG9yLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEFzQ29tYmluYXRvcjtcbiAgfVxuXG4gIHRvSlNPTihmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdGF0ZW1lbnRcbn0pO1xuXG5PYmplY3QuYXNzaWduKFN0YXRlbWVudC5wcm90b3R5cGUsIHVuaWZ5TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50O1xuXG4iXSwibmFtZXMiOlsidW5pZnlGdW5jdGlvbnMiLCJ1bmlmeVdpdGhCcmFja2V0ZWRDb21iaW5hdG9yIiwidW5pZnlXaXRoQ29tYmluYXRvcnMiLCJ2ZXJpZnlGdW5jdGlvbnMiLCJ2ZXJpZnlBc01ldGF2YXJpYWJsZSIsInZlcmlmeUFzRXF1YWxpdHkiLCJ2ZXJpZnlBc0ZyYW1lIiwidmVyaWZ5QXNKdWRnZW1lbnQiLCJ2ZXJpZnlBc0RlY2xhcmF0aW9uIiwidmVyaWZ5QXNUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5QXNEZWZpbmVkQXNzZXJ0aW9uIiwidmVyaWZ5QXNTdWJwcm9vZkFzc2VydGlvbiIsInZlcmlmeUFzQ29udGFpbmVkQXNzZXJ0aW9uIiwiU3RhdGVtZW50Iiwic3RyaW5nIiwibm9kZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJ1bmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwidW5pZmllZCIsInN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic29tZSIsInVuaWZ5RnVuY3Rpb24iLCJkZWJ1ZyIsInZlcmlmeSIsInZlcmlmaWVkIiwidmVyaWZ5RnVuY3Rpb24iLCJ2ZXJpZnlBc0NvbWJpbmF0b3IiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkQXNDb21iaW5hdG9yIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyIiwidmVyaWZ5U3RhdGVtZW50IiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJub2RlQXNTdHJpbmciLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIiwicHJvdG90eXBlIiwidW5pZnlNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1KQTs7O2VBQUE7OzsyREFqSmlCOzZEQUNPOzRFQUNrQjtvQkFFTztzQkFVTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLElBQU1BLGlCQUFpQjtJQUNmQyxtQ0FBNEI7SUFDNUJDLDJCQUFvQjtDQUNyQixFQUNEQyxrQkFBa0I7SUFDaEJDLDRCQUFvQjtJQUNwQkMsd0JBQWdCO0lBQ2hCQyxxQkFBYTtJQUNiQyx5QkFBaUI7SUFDakJDLDJCQUFtQjtJQUNuQkMsNkJBQXFCO0lBQ3JCQyxnQ0FBd0I7SUFDeEJDLGlDQUF5QjtJQUN6QkMsa0NBQTBCO0NBQzNCO0FBRVAsSUFBQSxBQUFNQywwQkFBTjthQUFNQSxVQUNRQyxNQUFNLEVBQUVDLElBQUk7Z0NBRHBCRjtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSFZGOztZQU1KRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsV0FBVyxFQUFFQyxN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