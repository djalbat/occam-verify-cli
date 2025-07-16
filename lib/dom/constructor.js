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
var _default = (0, _dom.domAssigned)(/*#__PURE__*/ function() {
    function Constructor(string, term) {
        _class_call_check(this, Constructor);
        this.string = string;
        this.term = term;
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
                var termJSON = (0, _json.termToTermJSON)(this.term), term = termJSON, json = {
                    term: term
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
                var Term = _dom.default.Term, localContext = _local.default.fromFileContext(fileContext), context = localContext, term = Term.fromConstructorDeclarationNode(constructorDeclarationNode, context), string = stringFromTerm(term), constructor = new Constructor(string, term);
                return constructor;
            }
        }
    ]);
    return Constructor;
}());
function stringFromTerm(term) {
    var string;
    var type = term.getType(), termString = term.getString();
    if (type === _type.objectType) {
        string = termString; ///
    } else {
        var typeString = type.getString();
        string = "".concat(termString, ":").concat(typeString);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUpTT04sIHRlcm1Ub1Rlcm1KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbnN0cnVjdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy50ZXJtLmdldFR5cGUoKTsgfVxuXG4gIHNldFR5cGUodHlwZSkgeyB0aGlzLnRlcm0uc2V0VHlwZSh0eXBlKTsgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB0ZXJtVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IGNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gLCB0ZXJtKTtcblxuICAgIGNvbnN0IHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3Rvcikge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBjb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICAgIHRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIHRlcm1VbmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtVG9UZXJtSlNPTih0aGlzLnRlcm0pLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBwcm92aXNpb25hbCB9ID0ganNvbixcbiAgICAgICAgICB0ZXJtID0gdGVybUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFByb3Zpc2lvbmFsKHRlcm0sIHByb3Zpc2lvbmFsKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0sIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybSh0ZXJtKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm0odGVybSkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKHR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICBzdHJpbmcgPSB0ZXJtU3RyaW5nOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfToke3R5cGVTdHJpbmd9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJDb25zdHJ1Y3RvciIsInN0cmluZyIsInRlcm0iLCJnZXRTdHJpbmciLCJnZXRUZXJtIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJ0eXBlIiwidW5pZnlUZXJtIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwidGVybVVuaWZpZWQiLCJjb25zdHJ1Y3RvciIsInRlcm1TdHJpbmciLCJjb25zdHJ1Y3RvclN0cmluZyIsInRyYWNlIiwidGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IiLCJ1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IiLCJ2ZXJpZmllZEFoZWFkIiwiZGVidWciLCJ0b0pTT04iLCJ0ZXJtSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJwcm92aXNpb25hbCIsInRlcm1Gcm9tSlNPTiIsInN0cmluZ0Zyb21UZXJtQW5kUHJvdmlzaW9uYWwiLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIlRlcm0iLCJkb20iLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJzdHJpbmdGcm9tVGVybSIsIm9iamVjdFR5cGUiLCJ0eXBlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7NERBQ1M7b0JBRUU7MkJBRWM7b0JBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3QyxXQUFlQSxJQUFBQSxnQkFBVyxnQkFBQzthQUFNQyxZQUNuQkMsTUFBTSxFQUFFQyxJQUFJO2dDQURPRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJ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