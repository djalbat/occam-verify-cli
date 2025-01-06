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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _type = require("../type");
var _constructor = /*#__PURE__*/ _interop_require_default(require("../../verifier/constructor"));
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
var _ConstructorDeclaration;
var _default = (0, _dom.domAssigned)((_ConstructorDeclaration = /*#__PURE__*/ function() {
    function ConstructorDeclaration(fileContext, constructor) {
        _class_call_check(this, ConstructorDeclaration);
        this.fileContext = fileContext;
        this.constructor = constructor;
    }
    _create_class(ConstructorDeclaration, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "getConstructor",
            value: function getConstructor() {
                return this.constructor;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.constructor.getString();
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified;
                var constructorDeclarationString = this.getString(); ///
                this.fileContext.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration..."));
                var term = this.constructor.getTerm(), termVerified = this.verifyTerm(term);
                if (termVerified) {
                    var type = this.constructor.getType();
                    var typeVerified = this.verifyType(type);
                    if (typeVerified) {
                        var typeName = type.getName();
                        type = this.fileContext.findTypeByTypeName(typeName);
                        term.setType(type);
                        this.fileContext.addConstructor(this.constructor);
                        verified = true;
                    }
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(constructorDeclarationString, "' constructor declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyTerm",
            value: function verifyTerm(term) {
                var termVerified;
                var termString = term.getString(); ///
                this.fileContext.trace("Verifying the '".concat(termString, "' term..."));
                var termNode = term.getNode();
                termVerified = _constructor.default.verifyTerm(termNode, this.fileContext);
                if (termVerified) {
                    this.fileContext.debug("...verified the '".concat(termString, "' term."));
                }
                return termVerified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(type) {
                var typeVerified;
                if (type === _type.objectType) {
                    typeVerified = true;
                } else {
                    var typeName = type.getName();
                    this.fileContext.trace("Verifying the '".concat(typeName, "' type..."));
                    var typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                    if (!typePresent) {
                        this.fileContext.debug("The '".concat(typeName, "' type is not present."));
                    } else {
                        typeVerified = true;
                    }
                    if (typeVerified) {
                        this.fileContext.debug("...verified the '".concat(typeName, "' type."));
                    }
                }
                return typeVerified;
            }
        }
    ], [
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var Constructor = _dom.default.Constructor, constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext), constructorDeclaration = new ConstructorDeclaration(fileContext, constructor);
                return constructorDeclaration;
            }
        }
    ]);
    return ConstructorDeclaration;
}(), _define_property(_ConstructorDeclaration, "name", "ConstructorDeclaration"), _ConstructorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgY29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvY29uc3RydWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTsgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0VGVybSgpLFxuICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybSh0ZXJtKTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgIGxldCB0eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZSh0eXBlKTtcblxuICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgIHR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgdGVybS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkQ29uc3RydWN0b3IodGhpcy5jb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtKHRlcm0pIHtcbiAgICBsZXQgdGVybVZlcmlmaWVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgIHRlcm1WZXJpZmllZCA9IGNvbnN0cnVjdG9yVmVyaWZpZXIudmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUodHlwZSkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICBpZiAodHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uc3RydWN0b3JEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZG9tLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBjb25zdHJ1Y3Rvcik7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImdldEZpbGVDb250ZXh0IiwiZ2V0Q29uc3RydWN0b3IiLCJnZXRTdHJpbmciLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInRlcm0iLCJnZXRUZXJtIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInR5cGUiLCJnZXRUeXBlIiwidHlwZVZlcmlmaWVkIiwidmVyaWZ5VHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInNldFR5cGUiLCJhZGRDb25zdHJ1Y3RvciIsImRlYnVnIiwidGVybVN0cmluZyIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsImNvbnN0cnVjdG9yVmVyaWZpZXIiLCJvYmplY3RUeXBlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3IiLCJkb20iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCO29CQUVXO2tFQUdLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVoQyxXQUFlQSxJQUFBQSxnQkFBVywyQ0FBQzthQUFNQyx1QkFDbkJDLFdBQVcsRUFBRUMsV0FBVztnQ0FETEY7UUFFN0IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7OztZQUdyQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDSCxXQUFXLENBQUNHLFNBQVM7WUFBSTs7O1lBRW5EQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsK0JBQStCLElBQUksQ0FBQ0gsU0FBUyxJQUFJLEdBQUc7Z0JBRTFELElBQUksQ0FBQ0osV0FBVyxDQUFDUSxLQUFLLENBQUMsQUFBQyxrQkFBOEMsT0FBN0JELDhCQUE2QjtnQkFFdEUsSUFBTUUsT0FBTyxJQUFJLENBQUNSLFdBQVcsQ0FBQ1MsT0FBTyxJQUMvQkMsZUFBZSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0g7Z0JBRXJDLElBQUlFLGNBQWM7b0JBQ2hCLElBQUlFLE9BQU8sSUFBSSxDQUFDWixXQUFXLENBQUNhLE9BQU87b0JBRW5DLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxVQUFVLENBQUNIO29CQUVyQyxJQUFJRSxjQUFjO3dCQUNoQixJQUFNRSxXQUFXSixLQUFLSyxPQUFPO3dCQUU3QkwsT0FBTyxJQUFJLENBQUNiLFdBQVcsQ0FBQ21CLGtCQUFrQixDQUFDRjt3QkFFM0NSLEtBQUtXLE9BQU8sQ0FBQ1A7d0JBRWIsSUFBSSxDQUFDYixXQUFXLENBQUNxQixjQUFjLENBQUMsSUFBSSxDQUFDcEIsV0FBVzt3QkFFaERLLFdBQVc7b0JBQ2I7Z0JBQ0Y7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWixJQUFJLENBQUNOLFdBQVcsQ0FBQ3NCLEtBQUssQ0FBQyxBQUFDLG9CQUFnRCxPQUE3QmYsOEJBQTZCO2dCQUMxRTtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdILElBQUk7Z0JBQ2IsSUFBSUU7Z0JBRUosSUFBTVksYUFBYWQsS0FBS0wsU0FBUyxJQUFJLEdBQUc7Z0JBRXhDLElBQUksQ0FBQ0osV0FBVyxDQUFDUSxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWGUsWUFBVztnQkFFcEQsSUFBTUMsV0FBV2YsS0FBS2dCLE9BQU87Z0JBRTdCZCxlQUFlZSxvQkFBbUIsQ0FBQ2QsVUFBVSxDQUFDWSxVQUFVLElBQUksQ0FBQ3hCLFdBQVc7Z0JBRXhFLElBQUlXLGNBQWM7b0JBQ2hCLElBQUksQ0FBQ1gsV0FBVyxDQUFDc0IsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhDLFlBQVc7Z0JBQ3hEO2dCQUVBLE9BQU9aO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0gsSUFBSTtnQkFDYixJQUFJRTtnQkFFSixJQUFJRixTQUFTYyxnQkFBVSxFQUFFO29CQUN2QlosZUFBZTtnQkFDakIsT0FBTztvQkFDTCxJQUFNRSxXQUFXSixLQUFLSyxPQUFPO29CQUU3QixJQUFJLENBQUNsQixXQUFXLENBQUNRLEtBQUssQ0FBQyxBQUFDLGtCQUEwQixPQUFUUyxVQUFTO29CQUVsRCxJQUFNVyxjQUFjLElBQUksQ0FBQzVCLFdBQVcsQ0FBQzZCLHVCQUF1QixDQUFDWjtvQkFFN0QsSUFBSSxDQUFDVyxhQUFhO3dCQUNoQixJQUFJLENBQUM1QixXQUFXLENBQUNzQixLQUFLLENBQUMsQUFBQyxRQUFnQixPQUFUTCxVQUFTO29CQUMxQyxPQUFPO3dCQUNMRixlQUFlO29CQUNqQjtvQkFFQSxJQUFJQSxjQUFjO3dCQUNoQixJQUFJLENBQUNmLFdBQVcsQ0FBQ3NCLEtBQUssQ0FBQyxBQUFDLG9CQUE0QixPQUFUTCxVQUFTO29CQUN0RDtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7O1lBSU9lLEtBQUFBO21CQUFQLFNBQU9BLCtCQUErQkMsMEJBQTBCLEVBQUUvQixXQUFXO2dCQUMzRSxJQUFNLEFBQUVnQyxjQUFnQkMsWUFBRyxDQUFuQkQsYUFDRi9CLGNBQWMrQixZQUFZRiw4QkFBOEIsQ0FBQ0MsNEJBQTRCL0IsY0FDckZrQyx5QkFBeUIsSUFBSW5DLHVCQUF1QkMsYUFBYUM7Z0JBRXZFLE9BQU9pQztZQUNUOzs7O0tBUkEsMENBQU9DLFFBQU8ifQ==