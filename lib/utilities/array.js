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
    compress: function() {
        return compress;
    },
    extract: function() {
        return extract;
    },
    filter: function() {
        return filter;
    },
    first: function() {
        return first;
    },
    last: function() {
        return last;
    },
    leftDifference: function() {
        return leftDifference;
    },
    match: function() {
        return match;
    },
    prune: function() {
        return prune;
    },
    push: function() {
        return push;
    },
    rightDifference: function() {
        return rightDifference;
    },
    second: function() {
        return second;
    },
    separate: function() {
        return separate;
    },
    someSubArray: function() {
        return someSubArray;
    }
});
var _necessary = require("necessary");
var _permutationsMatrix = /*#__PURE__*/ _interop_require_default(require("../permutationsMatrix"));
var _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push, prune = _necessary.arrayUtilities.prune, extract = _necessary.arrayUtilities.extract, match = _necessary.arrayUtilities.match, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress, separate = _necessary.arrayUtilities.separate;
function someSubArray(array, subArrayLength, callback) {
    var found = false;
    var arrayLength = array.length, indexesLength = arrayLength, permutationLength = subArrayLength; ///
    if (permutationLength <= _constants.MAXIMUM_PERMUTATION_LENGTH) {
        var offset, permutations;
        if (indexesLength > _constants.MAXIMUM_INDEXES_LENGTH) {
            offset = indexesLength - _constants.MAXIMUM_INDEXES_LENGTH;
            permutations = _permutationsMatrix.default[_constants.MAXIMUM_INDEXES_LENGTH][permutationLength];
        } else {
            offset = 0;
            permutations = _permutationsMatrix.default[indexesLength][permutationLength];
        }
        if (subArrayLength === 5) {
            permutations = [
                [
                    0,
                    3,
                    4,
                    5,
                    1
                ]
            ];
        }
        if (permutations !== null) {
            found = permutations.some(function(permutation) {
                if (permutation !== null) {
                    var subArray = [];
                    for(var position = 0; position < permutationLength; position++){
                        var index = permutation[position] + offset, element = array[index];
                        subArray.push(element);
                    }
                    var passed = callback(subArray);
                    if (passed) {
                        return true;
                    }
                }
            });
        }
    }
    return found;
}
function leftDifference(arrayA, arrayB) {
    filter(arrayA, function(elementA) {
        var arrayBIncludesElementA = arrayB.includes(elementA);
        if (!arrayBIncludesElementA) {
            return true;
        }
    });
}
function rightDifference(arrayA, arrayB) {
    filter(arrayB, function(elementB) {
        var arrayAIncludesElementB = arrayA.includes(elementB);
        if (!arrayAIncludesElementB) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgcGVybXV0YXRpb25zTWF0cml4IGZyb20gXCIuLi9wZXJtdXRhdGlvbnNNYXRyaXhcIjtcblxuaW1wb3J0IHsgTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCwgTUFYSU1VTV9QRVJNVVRBVElPTl9MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QsIHB1c2gsIHBydW5lLCBleHRyYWN0LCBtYXRjaCwgZmlsdGVyLCBjb21wcmVzcywgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gc29tZVN1YkFycmF5KGFycmF5LCBzdWJBcnJheUxlbmd0aCwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgIGluZGV4ZXNMZW5ndGggPSBhcnJheUxlbmd0aCwgLy8vXG4gICAgICAgIHBlcm11dGF0aW9uTGVuZ3RoID0gc3ViQXJyYXlMZW5ndGg7IC8vL1xuXG4gIGlmIChwZXJtdXRhdGlvbkxlbmd0aCA8PSBNQVhJTVVNX1BFUk1VVEFUSU9OX0xFTkdUSCkge1xuICAgIGxldCBvZmZzZXQsXG4gICAgICAgIHBlcm11dGF0aW9ucztcblxuICAgIGlmIChpbmRleGVzTGVuZ3RoID4gTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCkge1xuICAgICAgb2Zmc2V0ID0gaW5kZXhlc0xlbmd0aCAtIE1BWElNVU1fSU5ERVhFU19MRU5HVEg7XG5cbiAgICAgIHBlcm11dGF0aW9ucyA9IHBlcm11dGF0aW9uc01hdHJpeFtNQVhJTVVNX0lOREVYRVNfTEVOR1RIXVtwZXJtdXRhdGlvbkxlbmd0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldCA9IDA7XG5cbiAgICAgIHBlcm11dGF0aW9ucyA9IHBlcm11dGF0aW9uc01hdHJpeFtpbmRleGVzTGVuZ3RoXVtwZXJtdXRhdGlvbkxlbmd0aF07XG4gICAgfVxuXG4gICAgaWYgKHN1YkFycmF5TGVuZ3RoID09PSA1KSB7XG4gICAgICBwZXJtdXRhdGlvbnMgPSBbXG4gICAgICAgIFsgMCwgMywgNCwgNSwgMSBdXG4gICAgICBdO1xuICAgIH1cblxuICAgIGlmIChwZXJtdXRhdGlvbnMgIT09IG51bGwpIHtcbiAgICAgIGZvdW5kID0gcGVybXV0YXRpb25zLnNvbWUoKHBlcm11dGF0aW9uKSA9PiB7XG4gICAgICAgIGlmIChwZXJtdXRhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN1YkFycmF5ID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgcGVybXV0YXRpb25MZW5ndGg7IHBvc2l0aW9uKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGVybXV0YXRpb25bcG9zaXRpb25dICsgb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgICAgICAgICAgc3ViQXJyYXkucHVzaChlbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhzdWJBcnJheSk7XG5cbiAgICAgICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgIGNvbnN0IGFycmF5QUluY2x1ZGVzRWxlbWVudEIgPSBhcnJheUEuaW5jbHVkZXMoZWxlbWVudEIpO1xuXG4gICAgaWYgKCFhcnJheUFJbmNsdWRlc0VsZW1lbnRCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNvbXByZXNzIiwiZXh0cmFjdCIsImZpbHRlciIsImZpcnN0IiwibGFzdCIsImxlZnREaWZmZXJlbmNlIiwibWF0Y2giLCJwcnVuZSIsInB1c2giLCJyaWdodERpZmZlcmVuY2UiLCJzZWNvbmQiLCJzZXBhcmF0ZSIsInNvbWVTdWJBcnJheSIsImFycmF5VXRpbGl0aWVzIiwiYXJyYXkiLCJzdWJBcnJheUxlbmd0aCIsImNhbGxiYWNrIiwiZm91bmQiLCJhcnJheUxlbmd0aCIsImxlbmd0aCIsImluZGV4ZXNMZW5ndGgiLCJwZXJtdXRhdGlvbkxlbmd0aCIsIk1BWElNVU1fUEVSTVVUQVRJT05fTEVOR1RIIiwib2Zmc2V0IiwicGVybXV0YXRpb25zIiwiTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCIsInBlcm11dGF0aW9uc01hdHJpeCIsInNvbWUiLCJwZXJtdXRhdGlvbiIsInN1YkFycmF5IiwicG9zaXRpb24iLCJpbmRleCIsImVsZW1lbnQiLCJwYXNzZWQiLCJhcnJheUEiLCJhcnJheUIiLCJlbGVtZW50QSIsImFycmF5QkluY2x1ZGVzRWxlbWVudEEiLCJpbmNsdWRlcyIsImVsZW1lbnRCIiwiYXJyYXlBSW5jbHVkZXNFbGVtZW50QiJdLCJtYXBwaW5n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