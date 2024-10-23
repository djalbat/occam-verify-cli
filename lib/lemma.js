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
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("./topLevelAssertion"));
var _constants = require("./constants");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var Lemma = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Lemma, TopLevelAssertion);
    function Lemma() {
        _class_call_check(this, Lemma);
        return _call_super(this, Lemma, arguments);
    }
    _create_class(Lemma, [
        {
            key: "verify",
            value: function verify() {
                var _this = this;
                var verified = false;
                var lemmaString = this.string; ///
                lemmaString === _constants.EMPTY_STRING ? this.fileContext.trace("Verifying a lemma...") : this.fileContext.trace("Verifying the '".concat(lemmaString, "' lemma..."));
                var labelsVerifiedWhenDeclared = this.labels.every(function(label) {
                    var labelVVerifiedWhenDeclared = label.verifyWhenDeclared(_this.fileContext);
                    if (labelVVerifiedWhenDeclared) {
                        return true;
                    }
                });
                if (labelsVerifiedWhenDeclared) {
                    var localContext = _local.default.fromFileContext(this.fileContext), suppositionsVerified = this.suppositions.every(function(supposition) {
                        var suppositionVerified = supposition.verify(localContext);
                        if (suppositionVerified) {
                            return true;
                        }
                    });
                    if (suppositionsVerified) {
                        var consequentVerified = this.consequent.verify(localContext);
                        if (consequentVerified) {
                            var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), proofVerified = this.proof.verify(substitutions, this.consequent, localContext);
                            if (proofVerified) {
                                var lemma = this; ///
                                this.fileContext.addLemma(lemma);
                                verified = true;
                            }
                        }
                    }
                }
                if (verified) {
                    lemmaString === _constants.EMPTY_STRING ? this.fileContext.debug("...verified a lemma.") : this.fileContext.debug("...verified the '".concat(lemmaString, "' lemma."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromLemmaNode",
            value: function fromLemmaNode(metaLemmaNode, fileContext) {
                return _topLevelAssertion.default.fromNode(Lemma, metaLemmaNode, fileContext);
            }
        }
    ]);
    return Lemma;
}(_topLevelAssertion.default);
Object.assign(_shim.default, {
    Lemma: Lemma
});
var _default = Lemma;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sZW1tYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIExlbW1hIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZW1tYVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICAobGVtbWFTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIGEgbGVtbWEuLi5gKSA6XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGVtbWFTdHJpbmd9JyBsZW1tYS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkID0gbGFiZWwudmVyaWZ5V2hlbkRlY2xhcmVkKHRoaXMuZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gc3VwcG9zaXRpb24udmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zZXF1ZW50VmVyaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnNlcXVlbnRWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB0aGlzLnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCB0aGlzLmNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgICAgY29uc3QgbGVtbWEgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkTGVtbWEobGVtbWEpO1xuXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAobGVtbWFTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCBhIGxlbW1hLmApIDpcbiAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGVtbWFTdHJpbmd9JyBsZW1tYS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbU5vZGUoTGVtbWEsIG1ldGFMZW1tYU5vZGUsIGZpbGVDb250ZXh0KTsgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgTGVtbWFcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMZW1tYTtcbiJdLCJuYW1lcyI6WyJMZW1tYSIsInZlcmlmeSIsInZlcmlmaWVkIiwibGVtbWFTdHJpbmciLCJzdHJpbmciLCJFTVBUWV9TVFJJTkciLCJmaWxlQ29udGV4dCIsInRyYWNlIiwibGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJsYWJlbHMiLCJldmVyeSIsImxhYmVsIiwibGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25WZXJpZmllZCIsImNvbnNlcXVlbnRWZXJpZmllZCIsImNvbnNlcXVlbnQiLCJTdWJzdGl0dXRpb25zIiwic2hpbSIsInN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInByb29mVmVyaWZpZWQiLCJwcm9vZiIsImxlbW1hIiwiYWRkTGVtbWEiLCJkZWJ1ZyIsImZyb21MZW1tYU5vZGUiLCJtZXRhTGVtbWFOb2RlIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tTm9kZSIsIk9iamVjdCIsImFz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