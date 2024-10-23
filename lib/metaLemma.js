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
var MetaLemma = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(MetaLemma, TopLevelAssertion);
    function MetaLemma() {
        _class_call_check(this, MetaLemma);
        return _call_super(this, MetaLemma, arguments);
    }
    _create_class(MetaLemma, [
        {
            key: "verify",
            value: function verify() {
                var _this = this;
                var verified = false;
                var metaLemmaString = this.string; ///
                metaLemmaString === _constants.EMPTY_STRING ? this.fileContext.trace("Verifying a meta-lemma...") : this.fileContext.trace("Verifying the '".concat(metaLemmaString, "' meta-lemma..."));
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
                            var proofVerified = this.proof.verify(this.substitutions, this.consequent, localContext);
                            if (proofVerified) {
                                var metaLemma = this; ///
                                this.fileContext.addMetaLemma(metaLemma);
                                verified = true;
                            }
                        }
                    }
                }
                if (verified) {
                    metaLemmaString === _constants.EMPTY_STRING ? this.fileContext.debug("...verified a meta-lemma.") : this.fileContext.debug("...verified the '".concat(metaLemmaString, "' meta-lemma."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromMetaLemmaNode",
            value: function fromMetaLemmaNode(metaLemmaNode, fileContext) {
                return _topLevelAssertion.default.fromNode(MetaLemma, metaLemmaNode, fileContext);
            }
        }
    ]);
    return MetaLemma;
}(_topLevelAssertion.default);
Object.assign(_shim.default, {
    MetaLemma: MetaLemma
});
var _default = MetaLemma;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBNZXRhTGVtbWEgZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFMZW1tYVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICAobWV0YUxlbW1hU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyBhIG1ldGEtbGVtbWEuLi5gKSA6XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YUxlbW1hU3RyaW5nfScgbWV0YS1sZW1tYS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkID0gbGFiZWwudmVyaWZ5V2hlbkRlY2xhcmVkKHRoaXMuZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gc3VwcG9zaXRpb24udmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zZXF1ZW50VmVyaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnNlcXVlbnRWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZWQgPSB0aGlzLnByb29mLnZlcmlmeSh0aGlzLnN1YnN0aXR1dGlvbnMsIHRoaXMuY29uc2VxdWVudCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBtZXRhTGVtbWEgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkTWV0YUxlbW1hKG1ldGFMZW1tYSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIChtZXRhTGVtbWFTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCBhIG1ldGEtbGVtbWEuYCkgOlxuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhTGVtbWFTdHJpbmd9JyBtZXRhLWxlbW1hLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbU5vZGUoTWV0YUxlbW1hLCBtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIE1ldGFMZW1tYVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGFMZW1tYTsiXSwibmFtZXMiOlsiTWV0YUxlbW1hIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJtZXRhTGVtbWFTdHJpbmciLCJzdHJpbmciLCJFTVBUWV9TVFJJTkciLCJmaWxlQ29udGV4dCIsInRyYWNlIiwibGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJsYWJlbHMiLCJldmVyeSIsImxhYmVsIiwibGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25WZXJpZmllZCIsImNvbnNlcXVlbnRWZXJpZmllZCIsImNvbnNlcXVlbnQiLCJwcm9vZlZlcmlmaWVkIiwicHJvb2YiLCJzdWJzdGl0dXRpb25zIiwibWV0YUxlbW1hIiwiYWRkTWV0YUxlbW1hIiwiZGVidWciLCJmcm9tTWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYU5vZGUiLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUVBOzs7ZUFBQTs7OzJEQW5FaUI7NERBQ1E7d0VBQ0s7eUJBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSwwQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxrQkFBa0IsSUFBSSxDQUFDQyxNQUFNLEVBQUcsR0FBRztnQkFFeENELG9CQUFvQkUsdUJBQVksR0FDL0IsSUFBSSxDQUFDQyxXQUFXLENBQUNDLEtBQUssQ0FBRSwrQkFDdEIsSUFBSSxDQUFDRCxXQUFXLENBQUNDLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkosaUJBQWdCO2dCQUU3RCxJQUFNSyw2QkFBNkIsSUFBSSxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxTQUFDQztvQkFDcEQsSUFBTUMsNkJBQTZCRCxNQUFNRSxrQkFBa0IsQ0FBQyxNQUFLUCxXQUFXO29CQUU1RSxJQUFJTSw0QkFBNEI7d0JBQzlCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBSUosNEJBQTRCO29CQUM5QixJQUFNTSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQyxJQUFJLENBQUNWLFdBQVcsR0FDNURXLHVCQUF1QixJQUFJLENBQUNDLFlBQVksQ0FBQ1IsS0FBSyxDQUFDLFNBQUNTO3dCQUM5QyxJQUFNQyxzQkFBc0JELFlBQVlsQixNQUFNLENBQUNhO3dCQUUvQyxJQUFJTSxxQkFBcUI7NEJBQ3ZCLE9BQU87d0JBQ1Q7b0JBQ0Y7b0JBRU4sSUFBSUgsc0JBQXNCO3dCQUN4QixJQUFNSSxxQkFBcUIsSUFBSSxDQUFDQyxVQUFVLENBQUNyQixNQUFNLENBQUNhO3dCQUVsRCxJQUFJTyxvQkFBb0I7NEJBQ3RCLElBQU1FLGdCQUFnQixJQUFJLENBQUNDLEtBQUssQ0FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUN3QixhQUFhLEVBQUUsSUFBSSxDQUFDSCxVQUFVLEVBQUVSOzRCQUU3RSxJQUFJUyxlQUFlO2dDQUNqQixJQUFNRyxZQUFZLElBQUksRUFBRyxHQUFHO2dDQUU1QixJQUFJLENBQUNwQixXQUFXLENBQUNxQixZQUFZLENBQUNEO2dDQUU5QnhCLFdBQVc7NEJBQ2I7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWEMsb0JBQW9CRSx1QkFBWSxHQUMvQixJQUFJLENBQUNDLFdBQVcsQ0FBQ3NCLEtBQUssQ0FBRSwrQkFDdEIsSUFBSSxDQUFDdEIsV0FBVyxDQUFDc0IsS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCekIsaUJBQWdCO2dCQUNqRTtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBRU8yQixLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRXhCLFdBQVc7Z0JBQUksT0FBT3lCLDBCQUFpQixDQUFDQyxRQUFRLENBdERwRmhDLFdBc0RnRzhCLGVBQWV4QjtZQUFjOzs7V0F0RDdITjtFQUFrQitCLDBCQUFpQjtBQXlEekNFLE9BQU9DLE1BQU0sQ0FBQ0MsYUFBSSxFQUFFO0lBQ2xCbkMsV0FBQUE7QUFDRjtJQUVBLFdBQWVBIn0=