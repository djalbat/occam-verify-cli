"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FrameSubstitution;
    }
});
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _frame = /*#__PURE__*/ _interop_require_default(require("../context/partial/substitution/frame"));
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
var FrameSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(FrameSubstitution, Substitution);
    function FrameSubstitution(string, node, tokens, frame, metavariable) {
        _class_call_check(this, FrameSubstitution);
        var _this;
        _this = _call_super(this, FrameSubstitution, [
            string,
            node,
            tokens
        ]);
        _this.frame = frame;
        _this.metavariable = metavariable;
        return _this;
    }
    _create_class(FrameSubstitution, [
        {
            key: "getFrame",
            value: function getFrame() {
                return this.frame;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "isFrameEqualTo",
            value: function isFrameEqualTo(frame) {
                return this.frame.isEqualTo(frame);
            }
        },
        {
            key: "isMetavariableEqualTo",
            value: function isMetavariableEqualTo(metavariable) {
                return this.metavariable.isEqualTo(metavariable);
            }
        },
        {
            key: "matchName",
            value: function matchName(name) {
                return this.metavariable.matchName(name);
            }
        },
        {
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var frameNode = this.frame.getNode(), replacementNode = frameNode; ///
                return replacementNode;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var frameSubstitution = null;
                var frameSubstitutionNode = statementNode.getFrameSubstitutionNode();
                if (frameSubstitutionNode !== null) {
                    var lastFrameNode = frameSubstitutionNode.getLastFrameNode(), firstFrameNode = frameSubstitutionNode.getFirstFrameNode(), singularMetavariableNode = lastFrameNode.getSingularMetavariableNode();
                    if (singularMetavariableNode !== null) {
                        var Frame = _dom.default.Frame, Metavariable = _dom.default.Metavariable, frameNode = firstFrameNode, metavariableNode = singularMetavariableNode, frame = Frame.fromFrameNode(frameNode, context), metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), node = frameSubstitutionNode, tokens = context.nodeAsTokens(node), string = stringFromFrameAndMetavariable(frame, metavariable);
                        frameSubstitution = new FrameSubstitution(string, node, tokens, frame, metavariable);
                    }
                }
                return frameSubstitution;
            }
        },
        {
            key: "fromFrameAndMetavariable",
            value: function fromFrameAndMetavariable(frame, metavariable, context) {
                var string = stringFromFrameAndMetavariable(frame, metavariable), lexer = context.getLexer(), parser = context.getParser(), frameSubstitutionPartialContext = _frame.default.fromStringLexerAndParser(string, lexer, parser), node = frameSubstitutionPartialContext.getNode(), tokens = frameSubstitutionPartialContext.getTokens(), frameSubstitution = new FrameSubstitution(string, node, tokens, frame, metavariable);
                return frameSubstitution;
            }
        }
    ]);
    return FrameSubstitution;
}(_substitution.default);
function stringFromFrameAndMetavariable(frame, metavariable) {
    var frameString = frame.getString(), metavariableString = metavariable.getString(), string = "[".concat(frameString, " for [").concat(metavariableString, "]]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgRnJhbWVTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wYXJ0aWFsL3N1YnN0aXR1dGlvbi9mcmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCBmcmFtZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNGcmFtZUVxdWFsVG8oZnJhbWUpIHsgcmV0dXJuIHRoaXMuZnJhbWUuaXNFcXVhbFRvKGZyYW1lKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRXF1YWxUbyhtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpOyB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTmFtZShuYW1lKTsgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSBmcmFtZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsYXN0RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldExhc3RGcmFtZU5vZGUoKSxcbiAgICAgICAgICAgIGZpcnN0RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldEZpcnN0RnJhbWVOb2RlKCksXG4gICAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBsYXN0RnJhbWVOb2RlLmdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgICBpZiAoc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgRnJhbWUsIE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBmaXJzdEZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCBmcmFtZSwgbWV0YXZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0ID0gRnJhbWVTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gZnJhbWVTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gZnJhbWVTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZVN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgZnJhbWUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7ZnJhbWVTdHJpbmd9IGZvciBbJHttZXRhdmFyaWFibGVTdHJpbmd9XV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiRnJhbWVTdWJzdGl0dXRpb24iLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZnJhbWUiLCJtZXRhdmFyaWFibGUiLCJnZXRGcmFtZSIsImdldE1ldGF2YXJpYWJsZSIsImlzRnJhbWVFcXVhbFRvIiwiaXNFcXVhbFRvIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvIiwibWF0Y2hOYW1lIiwibmFtZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsImZyYW1lTm9kZSIsImdldE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJjb250ZXh0IiwiZnJhbWVTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJsYXN0RnJhbWVOb2RlIiwiZ2V0TGFzdEZyYW1lTm9kZSIsImZpcnN0RnJhbWVOb2RlIiwiZ2V0Rmlyc3RGcmFtZU5vZGUiLCJzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJGcmFtZSIsImRvbSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tRnJhbWVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJub2RlQXNUb2tlbnMiLCJzdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwiZnJhbWVTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCIsIkZyYW1lU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJnZXRUb2tlbnMiLCJTdWJzdGl0dXRpb24iLCJmcmFtZVN0cmluZyIsImdldFN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MERBSkw7bUVBQ1M7NERBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUEsa0JBQ1BDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsWUFBWTtnQ0FEbENMOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFRQztZQUFNQzs7UUFFcEIsTUFBS0MsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLFlBQVksR0FBR0E7OztrQkFMSEw7O1lBUW5CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUosS0FBSztnQkFBSSxPQUFPLElBQUksQ0FBQ0EsS0FBSyxDQUFDSyxTQUFTLENBQUNMO1lBQVE7OztZQUU1RE0sS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkwsWUFBWTtnQkFBSSxPQUFPLElBQUksQ0FBQ0EsWUFBWSxDQUFDSSxTQUFTLENBQUNKO1lBQWU7OztZQUV4Rk0sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUk7Z0JBQUksT0FBTyxJQUFJLENBQUNQLFlBQVksQ0FBQ00sU0FBUyxDQUFDQztZQUFPOzs7WUFFNURDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZLElBQUksQ0FBQ1YsS0FBSyxDQUFDVyxPQUFPLElBQzlCQyxrQkFBa0JGLFdBQVcsR0FBRztnQkFFdEMsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRUMsT0FBTztnQkFDN0MsSUFBSUMsb0JBQW9CO2dCQUV4QixJQUFNQyx3QkFBd0JILGNBQWNJLHdCQUF3QjtnQkFFcEUsSUFBSUQsMEJBQTBCLE1BQU07b0JBQ2xDLElBQU1FLGdCQUFnQkYsc0JBQXNCRyxnQkFBZ0IsSUFDdERDLGlCQUFpQkosc0JBQXNCSyxpQkFBaUIsSUFDeERDLDJCQUEyQkosY0FBY0ssMkJBQTJCO29CQUUxRSxJQUFJRCw2QkFBNkIsTUFBTTt3QkFDckMsSUFBUUUsUUFBd0JDLFlBQUcsQ0FBM0JELE9BQU9FLGVBQWlCRCxZQUFHLENBQXBCQyxjQUNUakIsWUFBWVcsZ0JBQ1pPLG1CQUFtQkwsMEJBQ25CdkIsUUFBUXlCLE1BQU1JLGFBQWEsQ0FBQ25CLFdBQVdLLFVBQ3ZDZCxlQUFlMEIsYUFBYUcsb0JBQW9CLENBQUNGLGtCQUFrQmIsVUFDbkVqQixPQUFPbUIsdUJBQ1BsQixTQUFTZ0IsUUFBUWdCLFlBQVksQ0FBQ2pDLE9BQzlCRCxTQUFTbUMsK0JBQStCaEMsT0FBT0M7d0JBRXJEZSxvQkFBb0IsSUFqRFBwQixrQkFpRDZCQyxRQUFRQyxNQUFNQyxRQUFRQyxPQUFPQztvQkFDekU7Z0JBQ0Y7Z0JBRUEsT0FBT2U7WUFDVDs7O1lBRU9pQixLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJqQyxLQUFLLEVBQUVDLFlBQVksRUFBRWMsT0FBTztnQkFDMUQsSUFBTWxCLFNBQVNtQywrQkFBK0JoQyxPQUFPQyxlQUMvQ2lDLFFBQVFuQixRQUFRb0IsUUFBUSxJQUN4QkMsU0FBU3JCLFFBQVFzQixTQUFTLElBQzFCQyxrQ0FBa0NDLGNBQStCLENBQUNDLHdCQUF3QixDQUFDM0MsUUFBUXFDLE9BQU9FLFNBQzFHdEMsT0FBT3dDLGdDQUFnQzNCLE9BQU8sSUFDOUNaLFNBQVN1QyxnQ0FBZ0NHLFNBQVMsSUFDbER6QixvQkFBb0IsSUEvRFRwQixrQkErRCtCQyxRQUFRQyxNQUFNQyxRQUFRQyxPQUFPQztnQkFFN0UsT0FBT2U7WUFDVDs7O1dBbEVtQnBCO0VBQTBCOEMscUJBQVk7QUFxRTNELFNBQVNWLCtCQUErQmhDLEtBQUssRUFBRUMsWUFBWTtJQUN6RCxJQUFNMEMsY0FBYzNDLE1BQU00QyxTQUFTLElBQzdCQyxxQkFBcUI1QyxhQUFhMkMsU0FBUyxJQUMzQy9DLFNBQVMsQUFBQyxJQUF1QmdELE9BQXBCRixhQUFZLFVBQTJCLE9BQW5CRSxvQkFBbUI7SUFFMUQsT0FBT2hEO0FBQ1QifQ==