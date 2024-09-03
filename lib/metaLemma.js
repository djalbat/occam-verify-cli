"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaLemma;
    }
});
var _metalemmaMetatheorem = /*#__PURE__*/ _interop_require_default(require("./metalemmaMetatheorem"));
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
var MetaLemma = /*#__PURE__*/ function(MetalemmaMetatheorem) {
    _inherits(MetaLemma, MetalemmaMetatheorem);
    function MetaLemma() {
        _class_call_check(this, MetaLemma);
        return _call_super(this, MetaLemma, arguments);
    }
    _create_class(MetaLemma, null, [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                return _metalemmaMetatheorem.default.fromJSONAndFileContext(MetaLemma, json, fileContext);
            }
        },
        {
            key: "fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext",
            value: function fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext(labels, metaSuppositions, metaConsequent, substitutions, fileContext) {
                return _metalemmaMetatheorem.default.fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext(MetaLemma, labels, metaSuppositions, metaConsequent, substitutions, fileContext);
            }
        }
    ]);
    return MetaLemma;
}(_metalemmaMetatheorem.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhbGVtbWFNZXRhdGhlb3JlbSBmcm9tIFwiLi9tZXRhbGVtbWFNZXRhdGhlb3JlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhTGVtbWEgZXh0ZW5kcyBNZXRhbGVtbWFNZXRhdGhlb3JlbSB7XG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7IHJldHVybiBNZXRhbGVtbWFNZXRhdGhlb3JlbS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KE1ldGFMZW1tYSwganNvbiwgZmlsZUNvbnRleHQpOyB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNNZXRhU3VwcG9zaXRpb25zTWV0YUNvbnNlcXVlbnRTdWJzdGl0dXRpb25zQW5kRmlsZUNvbnRleHQobGFiZWxzLCBtZXRhU3VwcG9zaXRpb25zLCBtZXRhQ29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpIHsgcmV0dXJuIE1ldGFsZW1tYU1ldGF0aGVvcmVtLmZyb21MYWJlbHNNZXRhU3VwcG9zaXRpb25zTWV0YUNvbnNlcXVlbnRTdWJzdGl0dXRpb25zQW5kRmlsZUNvbnRleHQoTWV0YUxlbW1hLCBsYWJlbHMsIG1ldGFTdXBwb3NpdGlvbnMsIG1ldGFDb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJNZXRhTGVtbWEiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwianNvbiIsImZpbGVDb250ZXh0IiwiTWV0YWxlbW1hTWV0YXRoZW9yZW0iLCJmcm9tTGFiZWxzTWV0YVN1cHBvc2l0aW9uc01ldGFDb25zZXF1ZW50U3Vic3RpdHV0aW9uc0FuZEZpbGVDb250ZXh0IiwibGFiZWxzIiwibWV0YVN1cHBvc2l0aW9ucyIsIm1ldGFDb25zZXF1ZW50Iiwic3Vic3RpdHV0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkVBRlk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSwwQkFBRCxBQUFMO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCQyxJQUFJLEVBQUVDLFdBQVc7Z0JBQUksT0FBT0MsNkJBQW9CLENBQUNILHNCQUFzQixDQURsRkQsV0FDOEZFLE1BQU1DO1lBQWM7OztZQUU5SEUsS0FBQUE7bUJBQVAsU0FBT0Esb0VBQW9FQyxNQUFNLEVBQUVDLGdCQUFnQixFQUFFQyxjQUFjLEVBQUVDLGFBQWEsRUFBRU4sV0FBVztnQkFBSSxPQUFPQyw2QkFBb0IsQ0FBQ0MsbUVBQW1FLENBSC9OTCxXQUcyT00sUUFBUUMsa0JBQWtCQyxnQkFBZ0JDLGVBQWVOO1lBQWM7OztXQUhsVEg7RUFBa0JJLDZCQUFvQiJ9