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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
var _unify = require("../../process/unify");
var _json = require("../../utilities/json");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var _ConstructorTerm;
var _default = (0, _elements.define)((_ConstructorTerm = /*#__PURE__*/ function() {
    function ConstructorTerm(term) {
        _class_call_check(this, ConstructorTerm);
        this.term = term;
    }
    _create_class(ConstructorTerm, [
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
            key: "getString",
            value: function getString() {
                return this.term.getString();
            }
        },
        {
            key: "isProvisional",
            value: function isProvisional() {
                return this.term.isProvisional();
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
                var termUnifies = false;
                var termString = term.getString(), constructorTermString = this.getString();
                context.trace("Unifying the '".concat(termString, "' term with the '").concat(constructorTermString, "' constructor's term..."));
                var constructorTerm = this, termUnifiesWithConstructor = (0, _unify.unifyTermWithConstructorTerm)(term, constructorTerm, context);
                if (termUnifiesWithConstructor) {
                    var verifiesAhead;
                    var type = this.getType();
                    term.setType(type);
                    verifiesAhead = verifyAhead();
                    termUnifies = verifiesAhead; ///
                }
                if (termUnifies) {
                    context.debug("...unified the '".concat(termString, "' term with the '").concat(constructorTermString, "' constructor's term."));
                }
                return termUnifies;
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
            value: function fromJSON(json, context) {
                var term = (0, _json.termFromJSON)(json, context), constructor = new ConstructorTerm(term);
                return constructor;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, context) {
                var Term = _elements.default.Term, term = Term.fromConstructorDeclarationNode(constructorDeclarationNode, context), constructor = new ConstructorTerm(term);
                return constructor;
            }
        }
    ]);
    return ConstructorTerm;
}(), _define_property(_ConstructorTerm, "name", "ConstructorTerm"), _ConstructorTerm));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3JUZXJtIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHRlcm1Gcm9tSlNPTiwgdGVybVRvVGVybUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbnN0cnVjdG9yVGVybSB7XG4gIGNvbnN0cnVjdG9yKHRlcm0pIHtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMudGVybS5nZXRUeXBlKCk7IH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLnRlcm0uZ2V0U3RyaW5nKCk7IH1cblxuICBpc1Byb3Zpc2lvbmFsKCkgeyByZXR1cm4gdGhpcy50ZXJtLmlzUHJvdmlzaW9uYWwoKTsgfVxuXG4gIHNldFR5cGUodHlwZSkgeyB0aGlzLnRlcm0uc2V0VHlwZSh0eXBlKTsgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uc3RydWN0b3JUZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclRlcm1TdHJpbmd9JyBjb25zdHJ1Y3RvcidzIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yVGVybSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yVGVybSh0ZXJtLCBjb25zdHJ1Y3RvclRlcm0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yKSB7XG4gICAgICBsZXQgdmVyaWZpZXNBaGVhZDtcblxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgIHZlcmlmaWVzQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICB0ZXJtVW5pZmllcyA9IHZlcmlmaWVzQWhlYWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yVGVybVN0cmluZ30nIGNvbnN0cnVjdG9yJ3MgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtVG9UZXJtSlNPTih0aGlzLnRlcm0pLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnN0cnVjdG9yVGVybVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3RvclRlcm0odGVybSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yVGVybSh0ZXJtKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29uc3RydWN0b3JUZXJtIiwidGVybSIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0U3RyaW5nIiwiaXNQcm92aXNpb25hbCIsInNldFR5cGUiLCJ0eXBlIiwidW5pZnlUZXJtIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwidGVybVVuaWZpZXMiLCJ0ZXJtU3RyaW5nIiwiY29uc3RydWN0b3JUZXJtU3RyaW5nIiwidHJhY2UiLCJjb25zdHJ1Y3RvclRlcm0iLCJ0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvclRlcm0iLCJ2ZXJpZmllc0FoZWFkIiwiZGVidWciLCJ0b0pTT04iLCJ0ZXJtSlNPTiIsInRlcm1Ub1Rlcm1KU09OIiwianNvbiIsImZyb21KU09OIiwidGVybUZyb21KU09OIiwiY29uc3RydWN0b3IiLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIlRlcm0iLCJlbGVtZW50cyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFB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