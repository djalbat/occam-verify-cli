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
                if (unified) {
                    localContext.debug("...unified the '".concat(statementString, "' statement."));
                }
                return unified;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified = false;
                var statement = this, statementString = this.string; ///
                localContext.trace("Verifying the '".concat(statementString, "' statement..."));
                if (!verified) {
                    verified = unifyFunctions.some(function(unifyFunction) {
                        var unified = unifyFunction(statement, assignments, stated, localContext);
                        if (unified) {
                            return true;
                        }
                    });
                }
                if (!verified) {
                    verified = verifyFunctions.some(function(verifyFunction) {
                        var verified = verifyFunction(statement, assignments, stated, localContext);
                        if (verified) {
                            return true;
                        }
                    });
                }
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
            value: function fromStatementNode(statementNode, localContext) {
                var statement;
                if (statementNode !== null) {
                    var node = statementNode, string = localContext.nodeAsString(node);
                    statement = new Statement(string, node);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi9taXhpbnMvdW5pZnlcIjtcbmltcG9ydCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9zdGF0ZW1lbnRBc0NvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgdW5pZnlXaXRoQ29tYmluYXRvcnMsIHVuaWZ5V2l0aEJyYWNrZXRlZENvbWJpbmF0b3IgfSBmcm9tIFwiLi9taXhpbnMvdW5pZnlcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IHZlcmlmeUFzTWV0YXZhcmlhYmxlLFxuICAgICAgICAgdmVyaWZ5QXNFcXVhbGl0eSxcbiAgICAgICAgIHZlcmlmeUFzRnJhbWUsXG4gICAgICAgICB2ZXJpZnlBc0p1ZGdlbWVudCxcbiAgICAgICAgIHZlcmlmeUFzRGVjbGFyYXRpb24sXG4gICAgICAgICB2ZXJpZnlBc1R5cGVBc3NlcnRpb24sXG4gICAgICAgICB2ZXJpZnlBc0RlZmluZWRBc3NlcnRpb24sXG4gICAgICAgICB2ZXJpZnlBc1N1YnByb29mQXNzZXJ0aW9uLFxuICAgICAgICAgdmVyaWZ5QXNDb250YWluZWRBc3NlcnRpb24gfSBmcm9tIFwiLi9taXhpbnMvdmVyaWZ5XCI7XG5cbmNvbnN0IHVuaWZ5RnVuY3Rpb25zID0gW1xuICAgICAgICB1bmlmeVdpdGhCcmFja2V0ZWRDb21iaW5hdG9yLFxuICAgICAgICB1bmlmeVdpdGhDb21iaW5hdG9yc1xuICAgICAgXSxcbiAgICAgIHZlcmlmeUZ1bmN0aW9ucyA9IFtcbiAgICAgICAgdmVyaWZ5QXNNZXRhdmFyaWFibGUsXG4gICAgICAgIHZlcmlmeUFzRXF1YWxpdHksXG4gICAgICAgIHZlcmlmeUFzRnJhbWUsXG4gICAgICAgIHZlcmlmeUFzSnVkZ2VtZW50LFxuICAgICAgICB2ZXJpZnlBc0RlY2xhcmF0aW9uLFxuICAgICAgICB2ZXJpZnlBc1R5cGVBc3NlcnRpb24sXG4gICAgICAgIHZlcmlmeUFzRGVmaW5lZEFzc2VydGlvbixcbiAgICAgICAgdmVyaWZ5QXNTdWJwcm9vZkFzc2VydGlvbixcbiAgICAgICAgdmVyaWZ5QXNDb250YWluZWRBc3NlcnRpb25cbiAgICAgIF07XG5cbmNsYXNzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgdW5pZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBpZiAodW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgdmVyaWZpZWQgPSB1bmlmeUZ1bmN0aW9ucy5zb21lKCh1bmlmeUZ1bmN0aW9uKSA9PiB7IC8vL1xuICAgICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlGdW5jdGlvbihzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgdmVyaWZpZWQgPSB2ZXJpZnlGdW5jdGlvbnMuc29tZSgodmVyaWZ5RnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWQgPSB2ZXJpZnlGdW5jdGlvbihzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHVuaWZ5V2l0aE1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhNZXRhVHlwZTtcblxuICAgIGNvbnN0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHRoaXMudmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHVuaWZpZWRXaXRoTWV0YVR5cGUgPSB2ZXJpZmllZEdpdmVuTWV0YVR5cGU7ICAvLy9cblxuICAgIHJldHVybiB1bmlmaWVkV2l0aE1ldGFUeXBlO1xuICB9XG5cbiAgdmVyaWZ5QXNDb21iaW5hdG9yKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEFzQ29tYmluYXRvcjtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGNvbWJpbmF0b3IuLi5gKTtcblxuICAgIHZlcmlmaWVkQXNDb21iaW5hdG9yID0gc3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIudmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWRBc0NvbWJpbmF0b3IpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGNvbWJpbmF0b3IuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXNDb21iaW5hdG9yO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIHN3aXRjaCAobWV0YVR5cGVOYW1lKSB7XG4gICAgICBjYXNlIEZSQU1FX01FVEFfVFlQRV9OQU1FOlxuICAgICAgY2FzZSBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgICAgZGVidWdnZXJcblxuICAgICAgICAvLyB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgLy8gICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAvLyAgICAgbWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGlmIChtZXRhdmFyaWFibGVNZXRhVHlwZSA9PT0gbWV0YVR5cGUpIHtcbiAgICAgICAgLy8gICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpXG5cbiAgICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEdpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB0b0pTT04oZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0cmluZywgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50O1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdGF0ZW1lbnRcbn0pO1xuXG5PYmplY3QuYXNzaWduKFN0YXRlbWVudC5wcm90b3R5cGUsIHVuaWZ5TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50O1xuXG4iXSwibmFtZXMiOlsidW5pZnlGdW5jdGlvbnMiLCJ1bmlmeVdpdGhCcmFja2V0ZWRDb21iaW5hdG9yIiwidW5pZnlXaXRoQ29tYmluYXRvcnMiLCJ2ZXJpZnlGdW5jdGlvbnMiLCJ2ZXJpZnlBc01ldGF2YXJpYWJsZSIsInZlcmlmeUFzRXF1YWxpdHkiLCJ2ZXJpZnlBc0ZyYW1lIiwidmVyaWZ5QXNKdWRnZW1lbnQiLCJ2ZXJpZnlBc0RlY2xhcmF0aW9uIiwidmVyaWZ5QXNUeXBlQXNzZXJ0aW9uIiwidmVyaWZ5QXNEZWZpbmVkQXNzZXJ0aW9uIiwidmVyaWZ5QXNTdWJwcm9vZkFzc2VydGlvbiIsInZlcmlmeUFzQ29udGFpbmVkQXNzZXJ0aW9uIiwiU3RhdGVtZW50Iiwic3RyaW5nIiwibm9kZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJ1bmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwidW5pZmllZCIsInN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwiZGVidWciLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInNvbWUiLCJ1bmlmeUZ1bmN0aW9uIiwidmVyaWZ5RnVuY3Rpb24iLCJ1bmlmeVdpdGhNZXRhVHlwZSIsIm1ldGFUeXBlIiwidW5pZmllZFdpdGhNZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJ2ZXJpZnlBc0NvbWJpbmF0b3IiLCJ2ZXJpZmllZEFzQ29tYmluYXRvciIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciIsInZlcmlmeVN0YXRlbWVudCIsIm1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsIlJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInRvSlNPTiIsImZpbGVDb250ZXh0IiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJub2RlQXNTdHJpbmciLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIiwicHJvdG90eXBlIiwidW5pZnlNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlOQTs7O2VBQUE7OzsyREEvTWlCOzZEQUNPOzRFQUNrQjtvQkFFTzs2QkFFd0M7c0JBUzlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBTUEsaUJBQWlCO0lBQ2ZDLG1DQUE0QjtJQUM1QkMsMkJBQW9CO0NBQ3JCLEVBQ0RDLGtCQUFrQjtJQUNoQkMsNEJBQW9CO0lBQ3BCQyx3QkFBZ0I7SUFDaEJDLHFCQUFhO0lBQ2JDLHlCQUFpQjtJQUNqQkMsMkJBQW1CO0lBQ25CQyw2QkFBcUI7SUFDckJDLGdDQUF3QjtJQUN4QkMsaUNBQXlCO0lBQ3pCQyxrQ0FBMEI7Q0FDM0I7QUFFUCxJQUFBLEFBQU1DLDBCQUFOO2FBQU1BLFVBQ1FDLE1BQU0sRUFBRUMsSUFBSTtnQ0FEcEJGO1FBRUYsSUFBSSxDQUFDQyxN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