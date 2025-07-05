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
var _type = require("./type");
var _query = require("../utilities/query");
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
    if (type === _type.baseType) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBiYXNlVHlwZSB9IGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgUFJPVklTSU9OQUxMWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IHRlcm1Gcm9tSlNPTiwgdGVybVRvVGVybUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgbGFzdFNlY29uZGFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL0BzZWNvbmRhcnkta2V5d29yZFstMV1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbnN0cnVjdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtLCBwcm92aXNpb25hbCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy50ZXJtLmdldFR5cGUoKTsgfVxuXG4gIHNldFR5cGUodHlwZSkgeyB0aGlzLnRlcm0uc2V0VHlwZSh0eXBlKTsgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB0ZXJtVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IGNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gLCB0ZXJtKTtcblxuICAgIGNvbnN0IHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3Rvcikge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBjb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICAgIHRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIHRlcm1VbmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtVG9UZXJtSlNPTih0aGlzLnRlcm0pLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbCxcbiAgICAgICAgICB0ZXJtID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBwcm92aXNpb25hbCB9ID0ganNvbixcbiAgICAgICAgICB0ZXJtID0gdGVybUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFByb3Zpc2lvbmFsKHRlcm0sIHByb3Zpc2lvbmFsKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0sIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm1BbmRQcm92aXNpb25hbCh0ZXJtLCBwcm92aXNpb25hbCksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFByb3Zpc2lvbmFsKHRlcm0sIHByb3Zpc2lvbmFsKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgdHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICBpZiAodHlwZSA9PT0gYmFzZVR5cGUpIHtcbiAgICBzdHJpbmcgPSB0ZXJtU3RyaW5nOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfToke3R5cGVTdHJpbmd9YDtcbiAgfVxuXG4gIGlmIChwcm92aXNpb25hbCkge1xuICAgIHN0cmluZyA9IGAke3N0cmluZ30gJHtQUk9WSVNJT05BTExZfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBwcm92aXNpb25hbEZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgY29uc3QgbGFzdFNlY29uZGFyeUtleXdvcmRUZXJtaW5hbE5vZGUgPSBsYXN0U2Vjb25kYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKTtcblxuICBpZiAobGFzdFNlY29uZGFyeUtleXdvcmRUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBjb250ZW50ID0gbGFzdFNlY29uZGFyeUtleXdvcmRUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnRQcm92aXNpb25hbGx5ID0gKGNvbnRlbnQgPT09IFBST1ZJU0lPTkFMTFkpO1xuXG4gICAgcHJvdmlzaW9uYWwgPSBjb250ZW50UHJvdmlzaW9uYWxseTsgLy8vXG4gIH1cblxuICByZXR1cm4gcHJvdmlzaW9uYWw7XG59XG4iXSwibmFtZXMiOlsibGFzdFNlY29uZGFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQ29uc3RydWN0b3IiLCJzdHJpbmciLCJ0ZXJtIiwicHJvdmlzaW9uYWwiLCJnZXRTdHJpbmciLCJnZXRUZXJtIiwiaXNQcm92aXNpb25hbCIsImdldFR5cGUiLCJzZXRUeXBlIiwidHlwZSIsInVuaWZ5VGVybSIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1VbmlmaWVkIiwiY29uc3RydWN0b3IiLCJ0ZXJtU3RyaW5nIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0cmFjZSIsInRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIiwidmVyaWZpZWRBaGVhZCIsImRlYnVnIiwidG9KU09OIiwidGVybUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwidGVybUZyb21KU09OIiwic3RyaW5nRnJvbVRlcm1BbmRQcm92aXNpb25hbCIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiVGVybSIsImRvbSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInByb3Zpc2lvbmFsRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiYmFzZVR5cGUiLCJ0eXBlU3RyaW5nIiwiUFJPVklTSU9OQUxMWSIsImxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50UHJvdmlzaW9uYWxseSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7MkRBWmdCOzREQUNTO29CQUVBO3FCQUNDO3lCQUVJOzJCQUNXO29CQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBTUEsd0NBQXdDQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXhELFdBQWVDLElBQUFBLGdCQUFXLGdCQUFDO2FBQU1DLFlBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVztnQ0FETkg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxXQUFXLEdBQUdBOzs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVksT0FBTyxJQUFJLENBQUNMLElBQUksQ0FBQ0ssT0FBTztZQUFJOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxJQUFJO2dCQUFJLElBQUksQ0FBQ1AsSUFBSSxDQUFDTSxPQUFPLENBQUNDO1lBQU87OztZQUV6Q0MsS0FBQUE7bUJBQUFBLFNBQUFBLFVB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