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
var _metaTypeNames = require("./metaTypeNames");
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
            key: "unifyWithMetaType",
            value: function unifyWithMetaType(metaType, assignments, stated, localContext) {
                var unifiedWithMetaType;
                var verifiedGivenMetaType = this.verifyGivenMetaType(metaType, assignments, stated, localContext);
                unifiedWithMetaType = verifiedGivenMetaType; ///
                return unifiedWithMetaType;
            }
        },
        {
            key: "verifyAsCombinator",
            value: function verifyAsCombinator(localContext) {
                var verifiedAsCombinator;
                var statementNode = this.node, statementString = this.string; ///
                localContext.trace("Verifying the '".concat(statementString, "' statement as a combinator..."));
                verifiedAsCombinator = _statementAsCombinator.default.verifyStatement(statementNode, localContext);
                if (verifiedAsCombinator) {
                    localContext.debug("...verified the '".concat(statementString, "' statement as a combinator."), statementNode);
                }
                return verifiedAsCombinator;
            }
        },
        {
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, assignments, stated, localContext) {
                var verifiedGivenMetaType;
                var metaTypeName = metaType.getName();
                switch(metaTypeName){
                    case _metaTypeNames.FRAME_META_TYPE_NAME:
                    case _metaTypeNames.REFERENCE_META_TYPE_NAME:
                        {
                            debugger;
                            break;
                        }
                    case _metaTypeNames.STATEMENT_META_TYPE_NAME:
                        {
                            var verified = this.verify(assignments, stated, localContext);
                            verifiedGivenMetaType = verified; ///
                            break;
                        }
                }
                return verifiedGivenMetaType;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi9taXhpbnMvdW5pZnlcIjtcbmltcG9ydCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9zdGF0ZW1lbnRBc0NvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgdW5pZnlXaXRoQ29tYmluYXRvcnMsIHVuaWZ5V2l0aEJyYWNrZXRlZENvbWJpbmF0b3IgfSBmcm9tIFwiLi9taXhpbnMvdW5pZnlcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IHZlcmlmeUFzTWV0YXZhcmlhYmxlLFxuICAgICAgICAgdmVyaWZ5QXNFcXVhbGl0eSxcbiAgICAgICAgIHZlcmlmeUFzRnJhbWUsXG4gICAgICAgICB2ZXJpZnlBc0p1ZGdlbWVudCxcbiAgICAgICAgIHZlcmlmeUFzRGVjbGFyYXRpb24sXG4gICAgICAgICB2ZXJpZnlBc1R5cGVBc3NlcnRpb24sXG4gICAgICAgICB2ZXJpZnlBc0RlZmluZWRBc3NlcnRpb24sXG4gICAgICAgICB2ZXJpZnlBc1N1YnByb29mQXNzZXJ0aW9uLFxuICAgICAgICAgdmVyaWZ5QXNDb250YWluZWRBc3NlcnRpb24gfSBmcm9tIFwiLi9taXhpbnMvdmVyaWZ5XCI7XG5cbmNvbnN0IHVuaWZ5RnVuY3Rpb25zID0gW1xuICAgICAgICB1bmlmeVdpdGhCcmFja2V0ZWRDb21iaW5hdG9yLFxuICAgICAgICB1bmlmeVdpdGhDb21iaW5hdG9yc1xuICAgICAgXSxcbiAgICAgIHZlcmlmeUZ1bmN0aW9ucyA9IFtcbiAgICAgICAgdmVyaWZ5QXNNZXRhdmFyaWFibGUsXG4gICAgICAgIHZlcmlmeUFzRXF1YWxpdHksXG4gICAgICAgIHZlcmlmeUFzRnJhbWUsXG4gICAgICAgIHZlcmlmeUFzSnVkZ2VtZW50LFxuICAgICAgICB2ZXJpZnlBc0RlY2xhcmF0aW9uLFxuICAgICAgICB2ZXJpZnlBc1R5cGVBc3NlcnRpb24sXG4gICAgICAgIHZlcmlmeUFzRGVmaW5lZEFzc2VydGlvbixcbiAgICAgICAgdmVyaWZ5QXNTdWJwcm9vZkFzc2VydGlvbixcbiAgICAgICAgdmVyaWZ5QXNDb250YWluZWRBc3NlcnRpb25cbiAgICAgIF07XG5cbmNsYXNzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgdW5pZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICB1bmlmaWVkID0gdW5pZnlGdW5jdGlvbnMuc29tZSgodW5pZnlGdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5RnVuY3Rpb24oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgdmVyaWZpZWQgPSB2ZXJpZnlGdW5jdGlvbnMuc29tZSgodmVyaWZ5RnVuY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkID0gdmVyaWZ5RnVuY3Rpb24oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeVdpdGhNZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRXaXRoTWV0YVR5cGU7XG5cbiAgICBjb25zdCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB0aGlzLnZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICB1bmlmaWVkV2l0aE1ldGFUeXBlID0gdmVyaWZpZWRHaXZlbk1ldGFUeXBlOyAgLy8vXG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhNZXRhVHlwZTtcbiAgfVxuXG4gIHZlcmlmeUFzQ29tYmluYXRvcihsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBc0NvbWJpbmF0b3I7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBjb21iaW5hdG9yLi4uYCk7XG5cbiAgICB2ZXJpZmllZEFzQ29tYmluYXRvciA9IHN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyLnZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVkQXNDb21iaW5hdG9yKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBjb21iaW5hdG9yLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEFzQ29tYmluYXRvcjtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGU7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBzd2l0Y2ggKG1ldGFUeXBlTmFtZSkge1xuICAgICAgY2FzZSBGUkFNRV9NRVRBX1RZUEVfTkFNRTpcbiAgICAgIGNhc2UgUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICAgIGRlYnVnZ2VyXG5cbiAgICAgICAgLy8gdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIC8vICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgLy8gICAgIG1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBpZiAobWV0YXZhcmlhYmxlTWV0YVR5cGUgPT09IG1ldGFUeXBlKSB7XG4gICAgICAgIC8vICAgICAgIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHRydWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KVxuXG4gICAgICAgIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdHJpbmcsIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFN0YXRlbWVudFxufSk7XG5cbk9iamVjdC5hc3NpZ24oU3RhdGVtZW50LnByb3RvdHlwZSwgdW5pZnlNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnQ7XG5cbiJdLCJuYW1lcyI6WyJ1bmlmeUZ1bmN0aW9ucyIsInVuaWZ5V2l0aEJyYWNrZXRlZENvbWJpbmF0b3IiLCJ1bmlmeVdpdGhDb21iaW5hdG9ycyIsInZlcmlmeUZ1bmN0aW9ucyIsInZlcmlmeUFzTWV0YXZhcmlhYmxlIiwidmVyaWZ5QXNFcXVhbGl0eSIsInZlcmlmeUFzRnJhbWUiLCJ2ZXJpZnlBc0p1ZGdlbWVudCIsInZlcmlmeUFzRGVjbGFyYXRpb24iLCJ2ZXJpZnlBc1R5cGVBc3NlcnRpb24iLCJ2ZXJpZnlBc0RlZmluZWRBc3NlcnRpb24iLCJ2ZXJpZnlBc1N1YnByb29mQXNzZXJ0aW9uIiwidmVyaWZ5QXNDb250YWluZWRBc3NlcnRpb24iLCJTdGF0ZW1lbnQiLCJzdHJpbmciLCJub2RlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsInVuaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJ1bmlmaWVkIiwic3RhdGVtZW50Iiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzb21lIiwidW5pZnlGdW5jdGlvbiIsImRlYnVnIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJ2ZXJpZnlGdW5jdGlvbiIsInVuaWZ5V2l0aE1ldGFUeXBlIiwibWV0YVR5cGUiLCJ1bmlmaWVkV2l0aE1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsInZlcmlmeUFzQ29tYmluYXRvciIsInZlcmlmaWVkQXNDb21iaW5hdG9yIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyIiwidmVyaWZ5U3RhdGVtZW50IiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidG9KU09OIiwiZmlsZUNvbnRleHQiLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmciLCJmcm9tU3RhdGVtZW50Tm9kZSIsIm5vZGVBc1N0cmluZyIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iLCJwcm90b3R5cGUiLCJ1bmlmeU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd01BOzs7ZUFBQTs7OzJEQXRNaUI7NkRBQ087NEVBQ2tCO29CQUVPOzZCQUV3QztzQkFTOUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFNQSxpQkFBaUI7SUFDZkMsbUNBQTRCO0lBQzVCQywyQkFBb0I7Q0FDckIsRUFDREMsa0JBQWtCO0lBQ2hCQyw0QkFBb0I7SUFDcEJDLHdCQUFnQjtJQUNoQkMscUJBQWE7SUFDYkMseUJBQWlCO0lBQ2pCQywyQkFBbUI7SUFDbkJDLDZCQUFxQjtJQUNyQkMsZ0NBQXdCO0lBQ3hCQyxpQ0FBeUI7SUFDekJDLGtDQUEwQjtDQUMzQjtBQUVQLElBQUEsQUFBTUMsMEJBQU47YUFBTUEsVUFDUUMsTUFBTSxFQUFFQyxJQUFJO2dDQURwQkY7UUFFRixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUhWRjs7WUFNSkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxZQUFZO2dCQUNyQyxJQUFJQztnQkFFSixJQUFNQyxZQUFZLElBQUksRUFDaEJDLGtCQUFrQixJQUFJLENBQUNWLE1BQU0sRUFBRyxHQUFHO2dCQUV6Q08sYUFBYUksS0FBSyxDQUFDLEFBQUMsaUJBQWdDLE9BQWhCRCxpQkFBZ0I7Z0JBRXBERixVQUFVdEIsZUFBZTBCLElBQUksQ0FBQyxTQUFDQztvQkFDN0IsSUFBTUwsVUFBVUssY0FBY0osV0FBV0osYUFBYUMsUUFBUUM7b0JBRTlELElBQUlDLFNBQVM7d0JBQ1gsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJQSxTQUFTO29CQUNYRCxhQUFhTyxLQUFLLENBQUMsQUFBQyxtQkFBa0MsT0FBaEJKLGlCQUFnQjtnQkFDeEQ7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPVixXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtnQkFDdEMsSUFBSVM7Z0JBRUosSUFBTVAsWUFBWSxJQUFJLEVBQ2hCQyxrQkFBa0IsSUFBSSxDQUFDVixNQUFNLEVBQUcsR0FBRztnQkFFekNPLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkQsaUJBQWdCO2dCQUVyRE0sV0FBVzNCLGdCQUFnQnVCLElBQUksQ0FBQyxTQUFDSztvQkFDL0IsSUFBTUQsV0FBV0MsZUFBZVIsV0FBV0osYUFBYUMsUUFBUUM7b0JBRWhFLElBQUlTLFVBQVU7d0JBQ1osT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaVCxhQUFhTyxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJKLGlCQUFnQjtnQkFDekQ7Z0JBRUEsT0FBT007WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFFBQVEsRUFBRWQsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7Z0JBQzNELElBQUlhO2dCQUVKLElBQU1DLHdCQUF3QixJQUFJLENBQUNDLG1CQUFtQixDQUFDSCxVQUFVZCxhQUFhQyxRQUFRQztnQkFFdEZhLHNCQUFzQkMsdUJBQXdCLEdBQUc7Z0JBRWpELE9BQU9EO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CaEIsWUFBWTtnQkFDN0IsSUFBSWlCO2dCQUVKLElBQU1DLGdCQUFnQixJQUFJLENBQUN4QixJQUFJLEVBQ3pCUyxrQkFBa0IsSUFBSSxDQUFDVixNQUFNLEVBQUcsR0FBRztnQkFFekNPLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkQsaUJBQWdCO2dCQUVyRGMsdUJBQXVCRSw4QkFBNkIsQ0FBQ0MsZUFBZSxDQUFDRixlQUFlbEI7Z0JBRXBGLElBQUlpQixzQkFBc0I7b0JBQ3hCakIsYUFBYU8sS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCSixpQkFBZ0IsaUNBQStCZTtnQkFDeEY7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFGLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JILFFBQVEsRUFBRWQsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7Z0JBQzdELElBQUljO2dCQUVKLElBQU1PLGVBQWVULFNBQVNVLE9BQU87Z0JBRXJDLE9BQVFEO29CQUNOLEtBQUtFLG1DQUFvQjtvQkFDekIsS0FBS0MsdUNBQXdCO3dCQUFFOzRCQUM3QixRQUFROzRCQW1CUjt3QkFDRjtvQkFFQSxLQUFLQyx1Q0FBd0I7d0JBQUU7NEJBQzdCLElBQU1oQixXQUFXLElBQUksQ0FBQ0QsTUFBTSxDQUFDVixhQUFhQyxRQUFRQzs0QkFFbERjLHdCQUF3QkwsVUFBVSxHQUFHOzRCQUVyQzt3QkFDRjtnQkFDRjtnQkFFQSxPQUFPSztZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVc7Z0JBQ2hCLElBQU1sQyxTQUFTLElBQUksQ0FBQ0EsTUFBTSxFQUNwQm1DLE9BQU87b0JBQ0xuQyxRQUFBQTtnQkFDRjtnQkFFTixPQUFPbUM7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVELFdBQVc7Z0JBQy9CLElBQU0sQUFBRWxDLFNBQVdtQyxLQUFYbkMsUUFDRlUsa0JBQWtCVixRQUNsQnFDLFFBQVFILFlBQVlJLFFBQVEsSUFDNUJDLFNBQVNMLFlBQVlNLFNBQVMsSUFDOUJmLGdCQUFnQmdCLElBQUFBLHNDQUFnQyxFQUFDL0IsaUJBQWlCMkIsT0FBT0UsU0FDekV0QyxPQUFPd0IsZUFDUGhCLFlBQVksSUFqSmhCVixVQWlKOEJDLFFBQVFDO2dCQUV4QyxPQUFPUTtZQUNUOzs7WUFFT2lDLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQmpCLGFBQWEsRUFBRVMsV0FBVztnQkFDakQsSUFBTWpDLE9BQU93QixlQUNQekIsU0FBU2tDLFlBQVlTLFlBQVksQ0FBQzFDLE9BQ2xDUSxZQUFZLElBekpoQlYsVUF5SjhCQyxRQUFRQztnQkFFeEMsT0FBT1E7WUFDVDs7O1dBNUpJVjs7QUErSk42QyxPQUFPQyxNQUFNLENBQUNDLGFBQUksRUFBRTtJQUNsQi9DLFdBQUFBO0FBQ0Y7QUFFQTZDLE9BQU9DLE1BQU0sQ0FBQzlDLFVBQVVnRCxTQUFTLEVBQUVDLGNBQVc7SUFFOUMsV0FBZWpEIn0=