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
        return Constructor;
    },
    stringFromTermAndType: function() {
        return stringFromTermAndType;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _type = /*#__PURE__*/ _interop_require_wildcard(require("./type"));
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
var termNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/term"), typeNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/type");
var Constructor = /*#__PURE__*/ function() {
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
            key: "verifyAtTopLevel",
            value: function verifyAtTopLevel(fileContext) {
                var verifiedAtTopLevel;
                var constructorString = this.string; ///
                fileContext.trace("Verifying the '".concat(constructorString, "' constructor at top level..."));
                var termTypeVerified = this.term.verifyType(fileContext);
                if (termTypeVerified) {
                    var termVerifiedAtTopLevel = this.term.verifyAtTopLevel(fileContext);
                    if (termVerifiedAtTopLevel) {
                        verifiedAtTopLevel = true; ///
                    }
                }
                if (verifiedAtTopLevel) {
                    fileContext.debug("...verified the '".concat(constructorString, "' constructor at top level."));
                }
                return verifiedAtTopLevel;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var termJSON = this.term.toJSON(), term = termJSON, json = {
                    term: term
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var term = json.term;
                var termJSON = term; ///
                json = termJSON; ///
                var Term1 = _shim.default.Term;
                term = Term1.fromJSON(json, fileContext);
                var type = term.getType(), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
                return constructor;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var termNode = termNodeQuery(constructorDeclarationNode), typeNode = typeNodeQuery(constructorDeclarationNode), type = typeNode === null ? _type.objectType : _type.default.fromTypeNode(typeNode), term = Term.fromTermNodeAndType(termNode, type), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
                return constructor;
            }
        }
    ]);
    return Constructor;
}();
function stringFromTermAndType(term, type) {
    var string;
    var termString = term.getString();
    if (type === null) {
        string = "".concat(termString);
    } else {
        var typeString = type.getString();
        string = "".concat(termString, ":").concat(typeString);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IFR5cGUsIHtvYmplY3RUeXBlfSBmcm9tIFwiLi90eXBlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb24vdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvbi90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdHJ1Y3RvciB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMudGVybS5nZXRUeXBlKCk7IH1cblxuICB2ZXJpZnlBdFRvcExldmVsKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IgYXQgdG9wIGxldmVsLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZVZlcmlmaWVkID0gdGhpcy50ZXJtLnZlcmlmeVR5cGUoZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1UeXBlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHRlcm1WZXJpZmllZEF0VG9wTGV2ZWwgPSB0aGlzLnRlcm0udmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvciBhdCB0b3AgbGV2ZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRoaXMudGVybS50b0pTT04oKSxcbiAgICAgICAgICB0ZXJtID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IHRlcm0gfSA9IGpzb247XG5cbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm07ICAvLy9cblxuICAgIGpzb24gPSB0ZXJtSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgeyBUZXJtIH0gPSBzaGltO1xuXG4gICAgdGVybSA9IFRlcm0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgdHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZSA9ICh0eXBlTm9kZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOlxuICAgICAgICAgICAgICAgICAgICAgVHlwZS5mcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ31gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ306JHt0eXBlU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIkNvbnN0cnVjdG9yIiwic3RyaW5nRnJvbVRlcm1BbmRUeXBlIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJzdHJpbmciLCJ0ZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0VGVybSIsImdldFR5cGUiLCJ2ZXJpZnlBdFRvcExldmVsIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJjb25zdHJ1Y3RvclN0cmluZyIsInRyYWNlIiwidGVybVR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJ0ZXJtVmVyaWZpZWRBdFRvcExldmVsIiwiZGVidWciLCJ0b0pTT04iLCJ0ZXJtSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIlRlcm0iLCJzaGltIiwidHlwZSIsImNvbnN0cnVjdG9yIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwib2JqZWN0VHlwZSIsIlR5cGUiLCJmcm9tVHlwZU5vZGUiLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwidGVybVN0cmluZyIsInR5cGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFVcUJBOztJQWtGTEMscUJBQXFCO2VBQXJCQTs7OzJEQTFGQzs0REFDYztxQkFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxpQ0FDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixJQUFBLEFBQU1ILDRCQUFOO2FBQU1BLFlBQ1BLLE1BQU0sRUFBRUMsSUFBSTtnQ0FETE47UUFFakIsSUFBSSxDQUFDSyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFIS047O1lBTW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZ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