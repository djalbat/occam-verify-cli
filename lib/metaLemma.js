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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
            key: "unifyReference",
            value: function unifyReference(reference, substitutions, context) {
                var referenceUnified;
                var metaLemma = this, referenceString = reference.getString(), metaLemmaString = metaLemma.getString();
                context.trace("Unifying the '".concat(referenceString, "' reference with the '").concat(metaLemmaString, "' meta-lemma..."));
                var fileContext = this.getFileContext(), localContext = _local.default.fromFileContext(fileContext), generalContext = localContext, specificContext = context, labelUnified = this.labels.some(function(label) {
                    substitutions.clear();
                    var referenceUnified = reference.unifyLabel(label, substitutions, generalContext, specificContext);
                    if (referenceUnified) {
                        return true;
                    }
                });
                referenceUnified = labelUnified; ///
                if (referenceUnified) {
                    context.debug("...unified the '".concat(referenceString, "' reference with the '").concat(metaLemmaString, "' meta-lemma."));
                }
                return referenceUnified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, context) {
                var statementUnified;
                var metaLemma = this, statementString = statement.getString(), metaLemmaString = metaLemma.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(metaLemmaString, "' meta-lemma..."));
                var suppositions = this.getSuppositions(), suppositionsLength = suppositions.length;
                if (suppositionsLength === 0) {
                    var statementUnifiedWithConsequent = this.unifyStatementWithConsequent(statement, substitutions, context);
                    statementUnified = statementUnifiedWithConsequent; ///
                }
                if (statementUnified) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(metaLemmaString, "' meta-lemma."));
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified;
                var metaLemma = this, fileContext = this.getFileContext(), metaLemmaString = metaLemma.getString();
                fileContext.trace("Verifying the '".concat(metaLemmaString, "' meta-lemma..."));
                verified = _get(_get_prototype_of(MetaLemma.prototype), "verify", this).call(this);
                if (verified) {
                    var metaTheorem = this; ///
                    fileContext.addMetatheorem(metaTheorem);
                    fileContext.debug("...verified the '".concat(metaLemmaString, "' meta-lemma."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmNsYXNzIE1ldGFMZW1tYSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgdW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVVuaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhTGVtbWEgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YUxlbW1hU3RyaW5nID0gbWV0YUxlbW1hLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhTGVtbWFTdHJpbmd9JyBtZXRhLWxlbW1hLi4uYCk7XG5cbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGxhYmVsVW5pZmllZCA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVVuaWZpZWQgPSByZWZlcmVuY2UudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VVbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmVmZXJlbmNlVW5pZmllZCA9IGxhYmVsVW5pZmllZDsgIC8vL1xuXG4gICAgaWYgKHJlZmVyZW5jZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhTGVtbWFTdHJpbmd9JyBtZXRhLWxlbW1hLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhTGVtbWEgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YUxlbW1hU3RyaW5nID0gbWV0YUxlbW1hLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhTGVtbWFTdHJpbmd9JyBtZXRhLWxlbW1hLi4uYCk7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSB0aGlzLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0xlbmd0aCA9IHN1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbnNlcXVlbnQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbnNlcXVlbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uc2VxdWVudDsgIC8vL1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YUxlbW1hU3RyaW5nfScgbWV0YS1sZW1tYS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhTGVtbWEgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBtZXRhTGVtbWFTdHJpbmcgPSBtZXRhTGVtbWEuZ2V0U3RyaW5nKCk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFTdHJpbmd9JyBtZXRhLWxlbW1hLi4uYCk7XG5cbiAgICB2ZXJpZmllZCA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBtZXRhVGhlb3JlbSA9IHRoaXM7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRNZXRhdGhlb3JlbShtZXRhVGhlb3JlbSk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YUxlbW1hU3RyaW5nfScgbWV0YS1sZW1tYS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21Ob2RlKE1ldGFMZW1tYSwgbWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBNZXRhTGVtbWFcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhTGVtbWE7Il0sIm5hbWVzIjpbIk1ldGFMZW1tYSIsInVuaWZ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJyZWZlcmVuY2VVbmlmaWVkIiwibWV0YUxlbW1hIiwicmVmZXJlbmNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwibWV0YUxlbW1hU3RyaW5nIiwidHJhY2UiLCJmaWxlQ29udGV4dCIsImdldEZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJsYWJlbFVuaWZpZWQiLCJsYWJlbHMiLCJzb21lIiwibGFiZWwiLCJjbGVhciIsInVuaWZ5TGFiZWwiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN0YXRlbWVudFVuaWZpZWRXaXRoQ29uc2VxdWVudCIsInVuaWZ5U3RhdGVtZW50V2l0aENvbnNlcXVlbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsIm1ldGFUaGVvcmVtIiwiYWRkTWV0YXRoZW9yZW0iLCJmcm9tTWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYU5vZGUiLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIiwic2hp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