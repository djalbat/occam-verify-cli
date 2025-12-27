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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../structure"));
var _type = require(".//type");
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
var _Constructor;
var _default = (0, _structure.define)((_Constructor = /*#__PURE__*/ function() {
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
                var constructor = this, termString = term.getString(), constructorString = constructor.getString();
                context.trace("Unifying the '".concat(termString, "' term with the '").concat(constructorString, "' constructor..."));
                var termUnifiesWithConstructor = (0, _unification.unifyTermWithConstructor)(term, constructor, context);
                if (termUnifiesWithConstructor) {
                    var verifiesAhead;
                    var type = constructor.getType();
                    term.setType(type);
                    verifiesAhead = verifyAhead();
                    termUnifies = verifiesAhead; ///
                }
                if (termUnifies) {
                    context.debug("...unified the '".concat(termString, "' term with the '").concat(constructorString, "' constructor."));
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
                var term = (0, _json.termFromJSON)(json, context), string = stringFromTerm(term), constructor = new Constructor(string, term);
                return constructor;
            }
        },
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, context) {
                var Term = _structure.default.Term, term = Term.fromConstructorDeclarationNode(constructorDeclarationNode, context), string = stringFromTerm(term), constructor = new Constructor(string, term);
                return constructor;
            }
        }
    ]);
    return Constructor;
}(), _define_property(_Constructor, "name", "Constructor"), _Constructor));
function stringFromTerm(term) {
    var string;
    var termString = term.getString(), type = term.getType();
    if (type === _type.baseType) {
        string = termString; ///
    } else {
        var typeString = type.getString();
        string = "".concat(termString, ":").concat(typeString);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uL3N0cnVjdHVyZVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5pbXBvcnQgeyBiYXNlVHlwZSB9IGZyb20gXCIuLy90eXBlXCI7XG5pbXBvcnQgeyB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUpTT04sIHRlcm1Ub1Rlcm1KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb25zdHJ1Y3RvciB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMudGVybS5nZXRUeXBlKCk7IH1cblxuICBpc1Byb3Zpc2lvbmFsKCkgeyByZXR1cm4gdGhpcy50ZXJtLmlzUHJvdmlzaW9uYWwoKTsgfVxuXG4gIHNldFR5cGUodHlwZSkgeyB0aGlzLnRlcm0uc2V0VHlwZSh0eXBlKTsgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IGNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3Rvcikge1xuICAgICAgbGV0IHZlcmlmaWVzQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBjb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICAgIHRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgICAgdmVyaWZpZXNBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIHRlcm1VbmlmaWVzID0gdmVyaWZpZXNBaGVhZDsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybUpTT04gPSB0ZXJtVG9UZXJtSlNPTih0aGlzLnRlcm0pLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnN0cnVjdG9yXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtKHRlcm0pLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHN0cmluZywgdGVybSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBUZXJtIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybSh0ZXJtKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm0odGVybSkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICB0eXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgaWYgKHR5cGUgPT09IGJhc2VUeXBlKSB7XG4gICAgc3RyaW5nID0gdGVybVN0cmluZzsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ306JHt0eXBlU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufSJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb25zdHJ1Y3RvciIsInN0cmluZyIsInRlcm0iLCJnZXRTdHJpbmciLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImlzUHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwidHlwZSIsInVuaWZ5VGVybSIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1VbmlmaWVzIiwiY29uc3RydWN0b3IiLCJ0ZXJtU3RyaW5nIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0cmFjZSIsInRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIiwidmVyaWZpZXNBaGVhZCIsImRlYnVnIiwidG9KU09OIiwidGVybUpTT04iLCJ0ZXJtVG9UZXJtSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1Gcm9tSlNPTiIsInN0cmluZ0Zyb21UZXJtIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJUZXJtIiwic3RydWN0dXJlIiwibmFtZSIsImJhc2VUeXBlIiwidHlwZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7aUVBUHNCO29CQUdHOzJCQUNnQjtvQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdDLFdBQWVBLElBQUFBLGlCQUFNLGdDQUFDO2FBQU1DLFlBQ2RDLE1BQU0sRUFBRUMsSUFBSTtnQ0FERUY7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBWSxPQUFPLElBQUksQ0FBQ0gsSUFBSSxDQUFDRyxPQUFPO1lBQUk7OztZQUV4Q0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFrQixPQUFPLElBQUksQ0FBQ0osSUFBSSxDQUFDSSxhQUFhO1lBQUk7OztZQUVwREMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLElBQUk7Z0JBQUksSUFBSSxDQUFDTixJQUFJLENBQUNLLE9BQU8sQ0FBQ0M7WUFBTzs7O1lBRXpDQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVVAsSUFBSSxFQUFFUSxPQUFPLEVBQUVDLFdBQVc7Z0JBQ2xDLElBQUlDLGNBQWM7Z0JBRWxCLElBQU1DLGNBQWMsSUFBSSxFQUNsQkMsYUFBYVosS0FBS0MsU0FBUyxJQUMzQlksb0JBQW9CRixZQUFZVixTQUFTO2dCQUUvQ08sUUFBUU0sS0FBSyxDQUFDLEFBQUMsaUJBQThDRCxPQUE5QkQsWUFBVyxxQkFBcUMsT0FBbEJDLG1CQUFrQjtnQkFFL0UsSUFBTUUsNkJBQTZCQyxJQUFBQSxxQ0FBd0IsRUFBQ2hCLE1BQU1XLGFBQWFIO2dCQUUvRSxJQUFJTyw0QkFBNEI7b0JBQzlCLElBQUlFO29CQUVKLElBQU1YLE9BQU9LLFlBQVlSLE9BQU87b0JBRWhDSCxLQUFLSyxPQUFPLENBQUNDO29CQUViVyxnQkFBZ0JSO29CQUVoQkMsY0FBY08sZUFBZ0IsR0FBRztnQkFDbkM7Z0JBRUEsSUFBSVAsYUFBYTtvQkFDZkYsUUFBUVUsS0FBSyxDQUFDLEFBQUMsbUJBQWdETCxPQUE5QkQsWUFBVyxxQkFBcUMsT0FBbEJDLG1CQUFrQjtnQkFDbkY7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyxJQUFBQSxvQkFBYyxFQUFDLElBQUksQ0FBQ3JCLElBQUksR0FDbkNBLE9BQU9vQixVQUNQRSxPQUFPO29CQUNMdEIsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT3NCO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFZCxPQUFPO2dCQUMzQixJQUFNUixPQUFPd0IsSUFBQUEsa0JBQVksRUFBQ0YsTUFBTWQsVUFDMUJULFNBQVMwQixlQUFlekIsT0FDeEJXLGNBQWMsSUFBSWIsWUFBWUMsUUFBUUM7Z0JBRTVDLE9BQU9XO1lBQ1Q7OztZQUVPZSxLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JDLDBCQUEwQixFQUFFbkIsT0FBTztnQkFDdkUsSUFBTSxBQUFFb0IsT0FBU0Msa0JBQVMsQ0FBbEJELE1BQ0Y1QixPQUFPNEIsS0FBS0YsOEJBQThCLENBQUNDLDRCQUE0Qm5CLFVBQ3ZFVCxTQUFTMEIsZUFBZXpCLE9BQ3hCVyxjQUFjLElBQUliLFlBQVlDLFFBQVFDO2dCQUU1QyxPQUFPVztZQUNUOzs7O0tBakJBLCtCQUFPbUIsUUFBTztBQW9CaEIsU0FBU0wsZUFBZXpCLElBQUk7SUFDMUIsSUFBSUQ7SUFFSixJQUFNYSxhQUFhWixLQUFLQyxTQUFTLElBQzNCSyxPQUFPTixLQUFLRyxPQUFPO0lBRXpCLElBQUlHLFNBQVN5QixjQUFRLEVBQUU7UUFDckJoQyxTQUFTYSxZQUFhLEdBQUc7SUFDM0IsT0FBTztRQUNMLElBQU1vQixhQUFhMUIsS0FBS0wsU0FBUztRQUVqQ0YsU0FBUyxBQUFDLEdBQWdCaUMsT0FBZHBCLFlBQVcsS0FBYyxPQUFYb0I7SUFDNUI7SUFFQSxPQUFPakM7QUFDVCJ9