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
            key: "getAssumptions",
            value: function getAssumptions() {
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
            key: "getAssumption",
            value: function getAssumption() {
                var assumption = null;
                var length = this.getLength();
                if (length === 1) {
                    var firstAssumption = first(this.assumptions);
                    assumption = firstAssumption; ///
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
                    var assumption = this.getAssumption();
                    metavariable = assumption.getMetavariable();
                }
                return metavariable;
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                var simple = false;
                var assumption = this.getAssumption();
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
                        var substitutionMatchesAssumption = assumption.matchSubstitution(substitution, context);
                        if (substitutionMatchesAssumption) {
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
                var assumptionsVerify = this.verifyAssumptions(assignments, stated, context);
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
            key: "verifyAssumptions",
            value: function verifyAssumptions(assignments, stated, context) {
                var assumptionsVerify = true; ///
                var length = this.getLength();
                if (length > 0) {
                    var sOrNothing = length > 1 ? _constants.S : _constants.NOTHING, assumptionsString = assumptionsStringFromAssumptions(this.assumptions);
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
                    var assumption = this.getAssumption(), assumptionJSON = assumption.toJSON();
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
    var Assumption = _ontology.default.Assumption, assumptionNodes = frameNode.getAssumptionNodes(), assumptions = assumptionNodes.map(function(assumptionNode) {
        var assumption = Assumption.fromAssumptionNode(assumptionNode, context);
        return assumption;
    });
    return assumptions;
}
function assumptionsStringFromAssumptions(assumptions) {
    var assumptionsString = assumptions.reduce(function(assumptionsString, assumption) {
        var assumptionString = assumption.getString();
        assumptionsString = assumptionsString === null ? assumptionString : "".concat(assumptionsString, ", ").concat(assumptionString);
        return assumptionsString;
    }, null);
    return assumptionsString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBTLCBOT1RISU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIGFzc3VtcHRpb25zKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hc3N1bXB0aW9ucy5sZW5ndGg7IH1cblxuICBnZXRBc3N1bXB0aW9uKCkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdEFzc3VtcHRpb24gPSBmaXJzdCh0aGlzLmFzc3VtcHRpb25zKTtcblxuICAgICAgYXNzdW1wdGlvbiA9IGZpcnN0QXNzdW1wdGlvbjsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5nZXRBc3N1bXB0aW9uKCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IGFzc3VtcHRpb24uZ2V0TWV0YXZhcmlhYmxlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGxldCBzaW1wbGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb24gPSB0aGlzLmdldEFzc3VtcHRpb24oKTtcblxuICAgIGlmIChhc3N1bXB0aW9uICE9PSBudWxsKSB7XG4gICAgICBzaW1wbGUgPSBhc3N1bXB0aW9uLmlzU2ltcGxlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9IChmcmFtZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpIHsgcmV0dXJuIHRoaXMubm9kZS5tYXRjaChmcmFtZU5vZGUpOyB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGlmICghc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRoaXMuYXNzdW1wdGlvbnMuc29tZSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzQXNzdW1wdGlvbiA9IGFzc3VtcHRpb24ubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc0Fzc3VtcHRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNNYXRjaDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9ucy5hc1N0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIHN1YnN0aXR1dGlvbnNNYXRjaCA9IHN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc01hdGNoKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zTWF0Y2g7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uc1ZlcmlmeSA9IHRoaXMudmVyaWZ5QXNzdW1wdGlvbnMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoYXNzdW1wdGlvbnNWZXJpZnkpIHtcbiAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgZnJhbWUgPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRGcmFtZShmcmFtZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoIXNpbXBsZSkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIG11c3QgYmUgc2ltcGxlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB2ZXJpZnlBc3N1bXB0aW9ucyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25zVmVyaWZ5ID0gdHJ1ZTsgIC8vL1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzT3JOb3RoaW5nID0gKGxlbmd0aCA+IDEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT1RISU5HLFxuICAgICAgICAgICAgYXNzdW1wdGlvbnNTdHJpbmcgPSBhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyh0aGlzLmFzc3VtcHRpb25zKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthc3N1bXB0aW9uc1N0cmluZ30nIGFzc3VtcHRpb24ke3NPck5vdGhpbmd9Li4uYCk7XG5cbiAgICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgYXNzdW1wdGlvbnNWZXJpZnkgPSB0aGlzLmFzc3VtcHRpb25zLmV2ZXJ5KChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb25WZXJpZmllcyA9IGFzc3VtcHRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBhc3N1bXB0aW9uVmVyaWZpZXM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25zVmVyaWZ5KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHthc3N1bXB0aW9uc1N0cmluZ30nIGFzc3VtcHRpb24ke3NPck5vdGhpbmd9LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IEZSQU1FX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2ZXJpZmllcyA9IHRoaXMudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIHZlcmlmaWVzR2l2ZW5NZXRhVHlwZSA9IHZlcmlmaWVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQganNvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5nZXRBc3N1bXB0aW9uKCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uSlNPTiA9IGFzc3VtcHRpb24udG9KU09OKCk7XG5cbiAgICAgIGpzb24gPSBhc3N1bXB0aW9uSlNPTjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID1vbnRvbG9neSxcbiAgICAgICAgICAgIGFzc3VtcHRpb24gPSBBc3N1bXB0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgYXNzdW1wdGlvbnMgPSBbXG4gICAgICAgICAgICAgIGFzc3VtcHRpb25cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgICB0b2tlbnMgPSBudWxsO1xuXG4gICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIHRva2VucywgYXNzdW1wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0ganVkZ2VtZW50Tm9kZS5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dClcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWUgfSA9IG9udG9sb2d5LFxuICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIHRva2VucywgYXNzdW1wdGlvbnMpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFzc3VtcHRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICBhc3N1bXB0aW9uTm9kZXMgPSBmcmFtZU5vZGUuZ2V0QXNzdW1wdGlvbk5vZGVzKCksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbk5vZGVzLm1hcCgoYXNzdW1wdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uID0gQXNzdW1wdGlvbi5mcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGFzc3VtcHRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZnVuY3Rpb24gYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnNTdHJpbmcgPSBhc3N1bXB0aW9ucy5yZWR1Y2UoKGFzc3VtcHRpb25zU3RyaW5nLCBhc3N1bXB0aW9uKSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IGFzc3VtcHRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBhc3N1bXB0aW9uc1N0cmluZyA9IChhc3N1bXB0aW9uc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YXNzdW1wdGlvbnNTdHJpbmd9LCAke2Fzc3VtcHRpb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJGcmFtZSIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJhc3N1bXB0aW9ucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRBc3N1bXB0aW9ucyIsImdldExlbmd0aCIsImxlbmd0aCIsImdldEFzc3VtcHRpb24iLCJhc3N1bXB0aW9uIiwiZmlyc3RBc3N1bXB0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwic2ltcGxlIiwiaXNTaW1wbGUiLCJpc0VxdWFsVG8iLCJmcmFtZSIsImZyYW1lU3RyaW5nIiwiZXF1YWxUbyIsIm1hdGNoRnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwibWF0Y2giLCJtYXRjaFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25NYXRjaGVzIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJzb21lIiwic3Vic3RpdHV0aW9uTWF0Y2hlc0Fzc3VtcHRpb24iLCJkZWJ1ZyIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zTWF0Y2giLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwiYXNTdHJpbmciLCJldmVyeVN1YnN0aXR1dGlvbiIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZXMiLCJhc3N1bXB0aW9uc1ZlcmlmeSIsInZlcmlmeUFzc3VtcHRpb25zIiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImFkZEZyYW1lIiwic09yTm90aGluZyIsIlMiLCJOT1RISU5HIiwiYXNzdW1wdGlvbnNTdHJpbmciLCJhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyIsImV2ZXJ5IiwiYXNzdW1wdGlvblZlcmlmaWVzIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZXNHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJ0b0pTT04iLCJqc29uIiwiYXNzdW1wdGlvbkpTT04iLCJmcm9tSlNPTiIsIkFzc3VtcHRpb24iLCJvbnRvbG9neSIsImZyb21GcmFtZU5vZGUiLCJmcmFtZUZyb21GcmFtZU5vZGUiLCJmcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJnZXRGcmFtZU5vZGUiLCJmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIm5hbWUiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUiLCJhc3N1bXB0aW9uTm9kZXMiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJtYXAiLCJhc3N1bXB0aW9uTm9kZSIsImZyb21Bc3N1bXB0aW9uTm9kZSIsInJlZHVjZSIsImFzc3VtcHRpb25TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O3lCQVYrQjtnRUFFVjt5QkFHTTs2QkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0lBRVIsV0FBZUUsSUFBQUEsZ0JBQU0sMEJBQUM7YUFBTUMsTUFDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsV0FBVztnQ0FEbkJKO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7OztZQUdyQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixXQUFXO1lBQ3pCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDTCxXQUFXLENBQUNNLE1BQU07WUFBRTs7O1lBRTlDQyxLQUFBQTttQkFBQUEsU0FB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