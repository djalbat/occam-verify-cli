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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _query = require("../utilities/query");
var _type = require("./type");
var _constants = require("../constants");
var _unification = require("../utilities/unification");
var _json = require("../utilities/json");
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
var lastSecondaryKeywordTerminalNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/@secondary-keyword[-1]");
var _default = (0, _dom.domAssigned)(/*#__PURE__*/ function() {
    function Constructor(string, term, provisional) {
        _class_call_check(this, Constructor);
        this.string = string;
        this.term = term;
        this.provisional = provisional;
    }
    _create_class(Constructor, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "isProvisional",
            value: function isProvisional() {
                return this.provisional;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.term.getType();
            }
        },
        {
            key: "setType",
            value: function setType(type) {
                this.term.setType(type);
            }
        },
        {
            key: "unifyTerm",
            value: function unifyTerm(term, context, verifyAhead) {
                var termUnified = false;
                var constructor = this, termString = term.getString(), constructorString = constructor.getString();
                context.trace("Unifying the '".concat(termString, "' term with the '").concat(constructorString, "' constructor..."), term);
                var termUnifiedWithConstructor = (0, _unification.unifyTermWithConstructor)(term, constructor, context);
                if (termUnifiedWithConstructor) {
                    var verifiedAhead;
                    var type = constructor.getType();
                    term.setType(type);
                    verifiedAhead = verifyAhead();
                    termUnified = verifiedAhead; ///
                }
                if (termUnified) {
                    context.debug("...unified the '".concat(termString, "' term with the '").concat(constructorString, "' constructor."), term);
                }
                return termUnified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var termJSON = (0, _json.termToTermJSON)(this.term), provisional = this.provisional, term = termJSON, json = {
                    term: term,
                    provisional: provisional
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var provisional = json.provisional, term = (0, _json.termFromJSON)(json, fileContext), string = stringFromTermAndProvisional(term, provisional), constructor = new Constructor(string, term, provisional);
                return constructor;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var Term = _dom.default.Term, localContext = _local.default.fromFileContext(fileContext), context = localContext, term = Term.fromConstructorDeclarationNode(constructorDeclarationNode, context), provisional = provisionalFromConstructorDeclarationNode(constructorDeclarationNode, fileContext), string = stringFromTermAndProvisional(term, provisional), constructor = new Constructor(string, term, provisional);
                return constructor;
            }
        }
    ]);
    return Constructor;
}());
function stringFromTermAndProvisional(term, provisional) {
    var string;
    var type = term.getType(), termString = term.getString();
    if (type === _type.objectType) {
        string = termString; ///
    } else {
        var typeString = type.getString();
        string = "".concat(termString, ":").concat(typeString);
    }
    if (provisional) {
        string = "".concat(string, " ").concat(_constants.PROVISIONALLY);
    }
    return string;
}
function provisionalFromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
    var provisional = false;
    var lastSecondaryKeywordTerminalNode = lastSecondaryKeywordTerminalNodeQuery(constructorDeclarationNode);
    if (lastSecondaryKeywordTerminalNode !== null) {
        var content = lastSecondaryKeywordTerminalNode.getContent(), contentProvisionally = content === _constants.PROVISIONALLY;
        provisional = contentProvisionally; ///
    }
    return provisional;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBQUk9WSVNJT05BTExZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3V0aWxpdGllcy91bmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgdGVybUZyb21KU09OLCB0ZXJtVG9UZXJtSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCBsYXN0U2Vjb25kYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb24vQHNlY29uZGFyeS1rZXl3b3JkWy0xXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uc3RydWN0b3Ige1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0sIHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnRlcm0uZ2V0VHlwZSgpOyB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7IHRoaXMudGVybS5zZXRUeXBlKHR5cGUpOyB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1VbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmAsIHRlcm0pO1xuXG4gICAgY29uc3QgdGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IgPSB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IodGVybSwgY29uc3RydWN0b3IsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yKSB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgY29uc3QgdHlwZSA9IGNvbnN0cnVjdG9yLmdldFR5cGUoKTtcblxuICAgICAgdGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgdGVybVVuaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm0pO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm1Ub1Rlcm1KU09OKHRoaXMudGVybSksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0aGlzLnByb3Zpc2lvbmFsLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHByb3Zpc2lvbmFsIH0gPSBqc29uLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kUHJvdmlzaW9uYWwodGVybSwgcHJvdmlzaW9uYWwpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHN0cmluZywgdGVybSwgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFRlcm0gfSA9IGRvbSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFByb3Zpc2lvbmFsKHRlcm0sIHByb3Zpc2lvbmFsKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0sIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtQW5kUHJvdmlzaW9uYWwodGVybSwgcHJvdmlzaW9uYWwpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCB0eXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gIGlmICh0eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgc3RyaW5nID0gdGVybVN0cmluZzsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ306JHt0eXBlU3RyaW5nfWA7XG4gIH1cblxuICBpZiAocHJvdmlzaW9uYWwpIHtcbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9ICR7UFJPVklTSU9OQUxMWX1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBwcm92aXNpb25hbCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlID0gbGFzdFNlY29uZGFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSk7XG5cbiAgaWYgKGxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgY29udGVudCA9IGxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50UHJvdmlzaW9uYWxseSA9IChjb250ZW50ID09PSBQUk9WSVNJT05BTExZKTtcblxuICAgIHByb3Zpc2lvbmFsID0gY29udGVudFByb3Zpc2lvbmFsbHk7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuIl0sIm5hbWVzIjpbImxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkNvbnN0cnVjdG9yIiwic3RyaW5nIiwidGVybSIsInByb3Zpc2lvbmFsIiwiZ2V0U3RyaW5nIiwiZ2V0VGVybSIsImlzUHJvdmlzaW9uYWwiLCJnZXRUeXBlIiwic2V0VHlwZSIsInR5cGUiLCJ1bmlmeVRlcm0iLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVW5pZmllZCIsImNvbnN0cnVjdG9yIiwidGVybVN0cmluZyIsImNvbnN0cnVjdG9yU3RyaW5nIiwidHJhY2UiLCJ0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsInZlcmlmaWVkQWhlYWQiLCJkZWJ1ZyIsInRvSlNPTiIsInRlcm1KU09OIiwidGVybVRvVGVybUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInRlcm1Gcm9tSlNPTiIsInN0cmluZ0Zyb21UZXJtQW5kUHJvdmlzaW9uYWwiLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIlRlcm0iLCJkb20iLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJwcm92aXNpb25hbEZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIm9iamVjdFR5cGUiLCJ0eXBlU3RyaW5nIiwiUFJPVklTSU9OQUxMWSIsImxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50UHJvdmlzaW9uYWxseSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7MkRBWmdCOzREQUNTO3FCQUVDO29CQUNDO3lCQUVHOzJCQUNXO29CQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBTUEsd0NBQXdDQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXhELFdBQWVDLElBQUFBLGdCQUFXLGdCQUFDO2FBQU1DLFlBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVztnQ0FETkg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxXQUFXLEdBQUdBOzs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVksT0FBTyxJQUFJLENBQUNMLElBQUksQ0FBQ0ssT0FBTztZQUFJOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxJQUFJO2dCQUFJLElBQUksQ0FBQ1AsSUFBSSxDQUFDTSxPQUFPLENBQUNDO1lBQU87OztZQUV6Q0MsS0FBQUE7bUJBQUFBLFNB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