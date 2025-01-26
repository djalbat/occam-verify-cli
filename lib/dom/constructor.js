"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    stringFromTermAndType: function() {
        return stringFromTermAndType;
    }
});
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
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
var termNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/term"), typeNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/type"), lastSecondaryKeywordTerminalNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/@secondary-keyword[-1]");
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
                var provisional = json.provisional, term = (0, _json.termFromJSON)(json, fileContext), type = term.getType(), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term, provisional);
                return constructor;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var Term = _dom.default.Term, Type = _dom.default.Type, termNode = termNodeQuery(constructorDeclarationNode), typeNode = typeNodeQuery(constructorDeclarationNode), localContext = _local.default.fromFileContext(fileContext), context = localContext, type = Type.fromTypeNode(typeNode), term = Term.fromTermNodeAndType(termNode, type, context), string = stringFromTermAndType(term, type), provisional = provisionalFromConstructorDeclarationNode(constructorDeclarationNode, fileContext), constructor = new Constructor(string, term, provisional);
                return constructor;
            }
        }
    ]);
    return Constructor;
}());
function stringFromTermAndType(term, type) {
    var string;
    var termString = term.getString();
    if (type === null) {
        string = "".concat(termString);
    } else {
        var typeName = type.getName();
        string = "".concat(termString, ":").concat(typeName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IFBST1ZJU0lPTkFMTFkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUpTT04sIHRlcm1Ub1Rlcm1KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvbi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICBsYXN0U2Vjb25kYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb24vQHNlY29uZGFyeS1rZXl3b3JkWy0xXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uc3RydWN0b3Ige1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0sIHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnRlcm0uZ2V0VHlwZSgpOyB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7IHRoaXMudGVybS5zZXRUeXBlKHR5cGUpOyB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1VbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmAsIHRlcm0pO1xuXG4gICAgY29uc3QgdGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IgPSB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IodGVybSwgY29uc3RydWN0b3IsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yKSB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgY29uc3QgdHlwZSA9IGNvbnN0cnVjdG9yLmdldFR5cGUoKTtcblxuICAgICAgdGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgdGVybVVuaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm0pO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm1Ub1Rlcm1KU09OKHRoaXMudGVybSksXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0aGlzLnByb3Zpc2lvbmFsLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHByb3Zpc2lvbmFsIH0gPSBqc29uLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVGVybSwgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9YDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ306JHt0eXBlTmFtZX1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gcHJvdmlzaW9uYWxGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBwcm92aXNpb25hbCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlID0gbGFzdFNlY29uZGFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSk7XG5cbiAgaWYgKGxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgY29udGVudCA9IGxhc3RTZWNvbmRhcnlLZXl3b3JkVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50UHJvdmlzaW9uYWxseSA9IChjb250ZW50ID09PSBQUk9WSVNJT05BTExZKTtcblxuICAgIHByb3Zpc2lvbmFsID0gY29udGVudFByb3Zpc2lvbmFsbHk7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHByb3Zpc2lvbmFsO1xufVxuIl0sIm5hbWVzIjpbInN0cmluZ0Zyb21UZXJtQW5kVHlwZSIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwibGFzdFNlY29uZGFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQ29uc3RydWN0b3IiLCJzdHJpbmciLCJ0ZXJtIiwicHJvdmlzaW9uYWwiLCJnZXRTdHJpbmciLCJnZXRUZXJtIiwiaXNQcm92aXNpb25hbCIsImdldFR5cGUiLCJzZXRUeXBlIiwidHlwZSIsInVuaWZ5VGVybSIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1VbmlmaWVkIiwiY29uc3RydWN0b3IiLCJ0ZXJtU3RyaW5nIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0cmFjZSIsInRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIiwidmVyaWZpZWRBaGVhZCIsImRlYnVnIiwidG9KU09OIiwidGVybUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwidGVybUZyb21KU09OIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJUZXJtIiwiZG9tIiwiVHlwZSIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmcm9tVHlwZU5vZGUiLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwicHJvdmlzaW9uYWxGcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJsYXN0U2Vjb25kYXJ5S2V5d29yZFRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFByb3Zpc2lvbmFsbHkiLCJQUk9WSVNJT05BTExZIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFlQSxPQXlGRztlQXpGSDs7SUEyRmdCQSxxQkFBcUI7ZUFBckJBOzs7MkRBeEdBOzREQUNTO3FCQUVDO3lCQUVJOzJCQUNXO29CQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLGlDQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLGlDQUMxQkUsd0NBQXdDRixJQUFBQSxnQkFBUyxFQUFDO0lBRXhELFdBQWVHLElBQUFBLGdCQUFXLGdCQUFDO2FBQU1DLFlBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVztnQ0FETkg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxXQUFXLEdBQUdBOzs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJ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