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
var _necessary = require("necessary");
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
var _constants = require("../constants");
var _metaTypeNames = require("../metaTypeNames");
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
var _Frame;
var first = _necessary.arrayUtilities.first;
var _default = (0, _ontology.define)((_Frame = /*#__PURE__*/ function() {
    function Frame(string, node, tokens, assumptions) {
        _class_call_check(this, Frame);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
        this.assumptions = assumptions;
    }
    _create_class(Frame, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.assumptions;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                return this.assumptions.length;
            }
        },
        {
            key: "getDeclaration",
            value: function getDeclaration() {
                var assumption = null;
                var length = this.getLength();
                if (length === 1) {
                    var firstDeclaration = first(this.assumptions);
                    assumption = firstDeclaration; ///
                }
                return assumption;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                var metavariable = null;
                var simple = this.isSimple();
                if (simple) {
                    var assumption = this.getDeclaration();
                    metavariable = assumption.getMetavariable();
                }
                return metavariable;
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                var simple = false;
                var assumption = this.getDeclaration();
                if (assumption !== null) {
                    simple = assumption.isSimple();
                }
                return simple;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(frame) {
                var frameString = frame.getString(), equalTo = frameString === this.string;
                return equalTo;
            }
        },
        {
            key: "matchFrameNode",
            value: function matchFrameNode(frameNode) {
                return this.node.match(frameNode);
            }
        },
        {
            key: "matchSubstitution",
            value: function matchSubstitution(substitution, context) {
                var substitutionMatches = false;
                var frameString = this.string, substitutionString = substitution.getString();
                context.trace("Matching the '".concat(substitutionString, "' substitution against the '").concat(frameString, "' frame..."));
                if (!substitutionMatches) {
                    substitutionMatches = this.assumptions.some(function(assumption) {
                        var substitutionMatchesDeclaration = assumption.matchSubstitution(substitution, context);
                        if (substitutionMatchesDeclaration) {
                            return true;
                        }
                    });
                }
                if (substitutionMatches) {
                    context.debug("...matched the '".concat(substitutionString, "' substitutions against the '").concat(frameString, "' frame."));
                }
                return substitutionMatches;
            }
        },
        {
            key: "matchSubstitutions",
            value: function matchSubstitutions(substitutions, context) {
                var _this = this;
                var substitutionsMatch;
                var frameString = this.string, substitutionsString = substitutions.asString();
                context.trace("Matching the '".concat(substitutionsString, "' substitutions against the '").concat(frameString, "' frame..."));
                substitutionsMatch = substitutions.everySubstitution(function(substitution) {
                    var substitutionMatches = _this.matchSubstitution(substitution, context);
                    if (substitutionMatches) {
                        return true;
                    }
                });
                if (substitutionsMatch) {
                    context.debug("...matched the '".concat(substitutionsString, "' substitutions against the '").concat(frameString, "' frame."));
                }
                return substitutionsMatch;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' frame..."));
                var assumptionsVerify = this.verifyDeclarations(assignments, stated, context);
                if (assumptionsVerify) {
                    var verifiesWhenStated = false, verifiesWhenDerived = false;
                    if (stated) {
                        verifiesWhenStated = this.verifyWhenStated(assignments, context);
                    } else {
                        verifiesWhenDerived = this.verifyWhenDerived(context);
                    }
                    if (verifiesWhenStated || verifiesWhenDerived) {
                        verifies = true;
                    }
                }
                if (verifies) {
                    var frame = this; ///
                    context.addFrame(frame);
                    context.debug("...verified the '".concat(frameString, "' frame."));
                }
                return verifies;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiesWhenStated = false;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' stated frame..."));
                var simple = this.isSimple();
                if (!simple) {
                    context.trace("The '".concat(frameString, "' stated frame must be simple."));
                } else {
                    verifiesWhenStated = true;
                }
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(frameString, "' stated frame."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiesWhenDerived;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' derived frame..."));
                verifiesWhenDerived = true;
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(frameString, "' derived frame."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "verifyDeclarations",
            value: function verifyDeclarations(assignments, stated, context) {
                var assumptionsVerify = true; ///
                var length = this.getLength();
                if (length > 0) {
                    var sOrNothing = length > 1 ? _constants.S : _constants.NOTHING, assumptionsString = assumptionsStringFromDeclarations(this.assumptions);
                    context.trace("Verifying the '".concat(assumptionsString, "' assumption").concat(sOrNothing, "..."));
                    stated = true; ///
                    assignments = null; ///
                    assumptionsVerify = this.assumptions.every(function(assumption) {
                        var assumptionVerifies = assumption.verify(assignments, stated, context);
                        return assumptionVerifies;
                    });
                    if (assumptionsVerify) {
                        context.debug("...verified the '".concat(assumptionsString, "' assumption").concat(sOrNothing, "."));
                    }
                }
                return assumptionsVerify;
            }
        },
        {
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, assignments, stated, context) {
                var verifiesGivenMetaType = false;
                var frameString = this.string, metaTypeString = metaType.getString();
                context.trace("Verifying the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME) {
                    var verifies = this.verify(assignments, stated, context);
                    verifiesGivenMetaType = verifies; ///
                }
                if (verifiesGivenMetaType) {
                    context.debug("...verified the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type."));
                }
                return verifiesGivenMetaType;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var json = null;
                var simple = this.isSimple();
                if (simple) {
                    var assumption = this.getDeclaration(), assumptionJSON = assumption.toJSON();
                    json = assumptionJSON; ///
                }
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var frame = null;
                if (json !== null) {
                    var Assumption = _ontology.default.Assumption, assumption = Assumption.fromJSON(json, context), assumptions = [
                        assumption
                    ], string = null, node = null, tokens = null;
                    frame = new Frame(string, node, tokens, assumptions);
                }
                return frame;
            }
        },
        {
            key: "fromFrameNode",
            value: function fromFrameNode(frameNode, context) {
                var frame = null;
                if (frameNode !== null) {
                    frame = frameFromFrameNode(frameNode, context);
                }
                return frame;
            }
        },
        {
            key: "fromJudgementNode",
            value: function fromJudgementNode(judgementNode, context) {
                var frameNode = judgementNode.getFrameNode(), frame = frameFromFrameNode(frameNode, context);
                return frame;
            }
        },
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, context) {
                var frame = null;
                var frameNode = definedAssertionNode.getFrameNode();
                if (frameNode !== null) {
                    frame = frameFromFrameNode(frameNode, context);
                }
                return frame;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, context) {
                var frame = null;
                var frameNode = containedAssertionNode.getFrameNode();
                if (frameNode !== null) {
                    frame = frameFromFrameNode(frameNode, context);
                }
                return frame;
            }
        }
    ]);
    return Frame;
}(), _define_property(_Frame, "name", "Frame"), _Frame));
function frameFromFrameNode(frameNode, context) {
    var Frame = _ontology.default.Frame, node = frameNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), assumptions = assumptionsFromFrameNode(frameNode, context), frame = new Frame(string, node, tokens, assumptions);
    return frame;
}
function assumptionsFromFrameNode(frameNode, context) {
    var Assumption = _ontology.default.Assumption, assumptionNodes = frameNode.getDeclarationNodes(), assumptions = assumptionNodes.map(function(assumptionNode) {
        var assumption = Assumption.fromDeclarationNode(assumptionNode, context);
        return assumption;
    });
    return assumptions;
}
function assumptionsStringFromDeclarations(assumptions) {
    var assumptionsString = assumptions.reduce(function(assumptionsString, assumption) {
        var assumptionString = assumption.getString();
        assumptionsString = assumptionsString === null ? assumptionString : "".concat(assumptionsString, ", ").concat(assumptionString);
        return assumptionsString;
    }, null);
    return assumptionsString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBTLCBOT1RISU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIGFzc3VtcHRpb25zKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldExlbmd0aCgpIHsgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbnMubGVuZ3RoOyB9XG5cbiAgZ2V0RGVjbGFyYXRpb24oKSB7XG4gICAgbGV0IGFzc3VtcHRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0RGVjbGFyYXRpb24gPSBmaXJzdCh0aGlzLmFzc3VtcHRpb25zKTtcblxuICAgICAgYXNzdW1wdGlvbiA9IGZpcnN0RGVjbGFyYXRpb247IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuZ2V0RGVjbGFyYXRpb24oKTtcblxuICAgICAgbWV0YXZhcmlhYmxlID0gYXNzdW1wdGlvbi5nZXRNZXRhdmFyaWFibGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgbGV0IHNpbXBsZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuZ2V0RGVjbGFyYXRpb24oKTtcblxuICAgIGlmIChhc3N1bXB0aW9uICE9PSBudWxsKSB7XG4gICAgICBzaW1wbGUgPSBhc3N1bXB0aW9uLmlzU2ltcGxlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9IChmcmFtZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpIHsgcmV0dXJuIHRoaXMubm9kZS5tYXRjaChmcmFtZU5vZGUpOyB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGlmICghc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRoaXMuYXNzdW1wdGlvbnMuc29tZSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzRGVjbGFyYXRpb24gPSBhc3N1bXB0aW9uLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25NYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uc01hdGNoO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgc3Vic3RpdHV0aW9uc01hdGNoID0gc3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25zTWF0Y2gpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNNYXRjaDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25zVmVyaWZ5ID0gdGhpcy52ZXJpZnlEZWNsYXJhdGlvbnMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoYXNzdW1wdGlvbnNWZXJpZnkpIHtcbiAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgZnJhbWUgPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRGcmFtZShmcmFtZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoIXNpbXBsZSkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIG11c3QgYmUgc2ltcGxlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB2ZXJpZnlEZWNsYXJhdGlvbnMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uc1ZlcmlmeSA9IHRydWU7ICAvLy9cblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc09yTm90aGluZyA9IChsZW5ndGggPiAxKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9USElORyxcbiAgICAgICAgICAgIGFzc3VtcHRpb25zU3RyaW5nID0gYXNzdW1wdGlvbnNTdHJpbmdGcm9tRGVjbGFyYXRpb25zKHRoaXMuYXNzdW1wdGlvbnMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbiR7c09yTm90aGluZ30uLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBhc3N1bXB0aW9uc1ZlcmlmeSA9IHRoaXMuYXNzdW1wdGlvbnMuZXZlcnkoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvblZlcmlmaWVzID0gYXNzdW1wdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGFzc3VtcHRpb25WZXJpZmllcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXNzdW1wdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbiR7c09yTm90aGluZ30uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVzID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmVyaWZpZXNHaXZlbk1ldGFUeXBlID0gdmVyaWZpZXM7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc0dpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBqc29uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSB0aGlzLmdldERlY2xhcmF0aW9uKCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uSlNPTiA9IGFzc3VtcHRpb24udG9KU09OKCk7XG5cbiAgICAgIGpzb24gPSBhc3N1bXB0aW9uSlNPTjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID1vbnRvbG9neSxcbiAgICAgICAgICAgIGFzc3VtcHRpb24gPSBBc3N1bXB0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgYXNzdW1wdGlvbnMgPSBbXG4gICAgICAgICAgICAgIGFzc3VtcHRpb25cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgICB0b2tlbnMgPSBudWxsO1xuXG4gICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIHRva2VucywgYXNzdW1wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0ganVkZ2VtZW50Tm9kZS5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dClcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWUgfSA9IG9udG9sb2d5LFxuICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIHRva2VucywgYXNzdW1wdGlvbnMpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFzc3VtcHRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICBhc3N1bXB0aW9uTm9kZXMgPSBmcmFtZU5vZGUuZ2V0RGVjbGFyYXRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25Ob2Rlcy5tYXAoKGFzc3VtcHRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IEFzc3VtcHRpb24uZnJvbURlY2xhcmF0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5mdW5jdGlvbiBhc3N1bXB0aW9uc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnMoYXNzdW1wdGlvbnMpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnNTdHJpbmcgPSBhc3N1bXB0aW9ucy5yZWR1Y2UoKGFzc3VtcHRpb25zU3RyaW5nLCBhc3N1bXB0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IGFzc3VtcHRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBhc3N1bXB0aW9uc1N0cmluZyA9IChhc3N1bXB0aW9uc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YXNzdW1wdGlvbnNTdHJpbmd9LCAke2Fzc3VtcHRpb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJGcmFtZSIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJhc3N1bXB0aW9ucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXREZWNsYXJhdGlvbiIsImFzc3VtcHRpb24iLCJmaXJzdERlY2xhcmF0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwic2ltcGxlIiwiaXNTaW1wbGUiLCJpc0VxdWFsVG8iLCJmcmFtZSIsImZyYW1lU3RyaW5nIiwiZXF1YWxUbyIsIm1hdGNoRnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwibWF0Y2giLCJtYXRjaFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25NYXRjaGVzIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJzb21lIiwic3Vic3RpdHV0aW9uTWF0Y2hlc0RlY2xhcmF0aW9uIiwiZGVidWciLCJtYXRjaFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc01hdGNoIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImFzU3RyaW5nIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVzIiwiYXNzdW1wdGlvbnNWZXJpZnkiLCJ2ZXJpZnlEZWNsYXJhdGlvbnMiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiYWRkRnJhbWUiLCJzT3JOb3RoaW5nIiwiUyIsIk5PVEhJTkciLCJhc3N1bXB0aW9uc1N0cmluZyIsImFzc3VtcHRpb25zU3RyaW5nRnJvbURlY2xhcmF0aW9ucyIsImV2ZXJ5IiwiYXNzdW1wdGlvblZlcmlmaWVzIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZXNHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJ0b0pTT04iLCJqc29uIiwiYXNzdW1wdGlvbkpTT04iLCJmcm9tSlNPTiIsIkFzc3VtcHRpb24iLCJvbnRvbG9neSIsImZyb21GcmFtZU5vZGUiLCJmcmFtZUZyb21GcmFtZU5vZGUiLCJmcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJnZXRGcmFtZU5vZGUiLCJmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIm5hbWUiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUiLCJhc3N1bXB0aW9uTm9kZXMiLCJnZXREZWNsYXJhdGlvbk5vZGVzIiwibWFwIiwiYXNzdW1wdGlvbk5vZGUiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwicmVkdWNlIiwiYXNzdW1wdGlvblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7eUJBVitCO2dFQUVWO3lCQUdNOzZCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7SUFFUixXQUFlRSxJQUFBQSxnQkFBTSwwQkFBQzthQUFNQyxNQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxXQUFXO2dDQURuQko7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOzs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFdBQVc7WUFDekI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNMLFdBQVcsQ0FBQ00sTUFBTTtZQUFFOzs7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