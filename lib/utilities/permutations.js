"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _necessary = require("necessary");
var _array = require("../utilities/array");
var _constants = require("../constants");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var writeFile = _necessary.fileSystemUtilities.writeFile;
writePermutationsMatrixFile();
function permutationsMatrixFromNothing() {
    var permutationsMatrix = [];
    for(var indexesLength = 0; indexesLength <= _constants.MAXIMUM_INDEXES_LENGTH; indexesLength++){
        var permutationsArray = [];
        for(var permutationLength = 0; permutationLength <= _constants.MAXIMUM_PERMUTATION_LENGTH; permutationLength++){
            var permutations = permutationLength === 0 || permutationLength > indexesLength ? null : permutationsFromIndexesLengthAndPermutationLength(indexesLength, permutationLength);
            permutationsArray.push(permutations);
        }
        permutationsMatrix.push(permutationsArray);
    }
    return permutationsMatrix;
}
function writePermutationsMatrixFile() {
    var permutationsMatrix = permutationsMatrixFromNothing(), permutationsMatrixJSON = JSON.stringify(permutationsMatrix), permutationsMatrixFileName = "./bin/permutationsMatrix.js", permutationsMatrixFileContent = '"use strict";\n        \nconst permutationsMatrix = '.concat(permutationsMatrixJSON, ";\n  \nexport default permutationsMatrix;      \n  ");
    writeFile(permutationsMatrixFileName, permutationsMatrixFileContent);
}
function permutationsFromChoice(choice) {
    var permutations = [], choiceLength = choice.length;
    if (choiceLength === 1) {
        var permutation = choice.slice();
        permutations.push(permutation);
    } else {
        var innerChoice = choice.slice(0), start = 0, deleteCount = 1, indexes = innerChoice.splice(start, deleteCount), firstIndex = (0, _array.first)(indexes), innerPermutations = permutationsFromChoice(innerChoice);
        innerPermutations.forEach(function(innerPermutation) {
            for(var position = 0; position < choiceLength; position++){
                var permutation = innerPermutation.slice(0), start = position, deleteCount = 0;
                permutation.splice(start, deleteCount, firstIndex);
                permutations.push(permutation);
            }
        });
    }
    return permutations;
}
function permutationsFromChoices(choices) {
    var permutations = [];
    choices.forEach(function(choice) {
        var choicePermutations = permutationsFromChoice(choice);
        (0, _array.push)(permutations, choicePermutations);
    });
    return permutations;
}
function indexesFromIndexesLength(indexesLength) {
    var indexes = [];
    for(var index = 0; index < indexesLength; index++){
        indexes.push(index);
    }
    return indexes;
}
function choicesFromIndexesAndChoiceLength(indexes, choiceLength) {
    var choices = [], indexesLength = indexes.length;
    if (choiceLength === 0) {
    ///
    } else if (choiceLength === 1) {
        for(var position = 0; position < indexesLength; position++){
            var index = indexes[position], choice = [
                index
            ];
            choices.push(choice);
        }
    } else {
        var _loop = function(position1) {
            var innerIndexes = indexes.slice(0), start = 0, deleteCount = position1 + 1, deletedIndexes = innerIndexes.splice(start, deleteCount), lastDeletedIndex = (0, _array.last)(deletedIndexes), index = lastDeletedIndex, innerChoices = choicesFromIndexesAndChoiceLength(innerIndexes, innerChoiceLength);
            innerChoices.forEach(function(innerChoice) {
                var choice = [
                    index
                ].concat(_toConsumableArray(innerChoice));
                choices.push(choice);
            });
        };
        var innerChoiceLength = choiceLength - 1;
        for(var position1 = 0; position1 < indexesLength; position1++)_loop(position1);
    }
    return choices;
}
function permutationsFromIndexesLengthAndPermutationLength(indexesLength, permutationLength) {
    var choiceLength = permutationLength, indexes = indexesFromIndexesLength(indexesLength), choices = choicesFromIndexesAndChoiceLength(indexes, choiceLength), permutations = permutationsFromChoices(choices);
    return permutations;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGVybXV0YXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBwdXNoLCBsYXN0LCBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IE1BWElNVU1fSU5ERVhFU19MRU5HVEgsIE1BWElNVU1fUEVSTVVUQVRJT05fTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHdyaXRlRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxud3JpdGVQZXJtdXRhdGlvbnNNYXRyaXhGaWxlKCk7XG5cbmZ1bmN0aW9uIHBlcm11dGF0aW9uc01hdHJpeEZyb21Ob3RoaW5nKCkge1xuICBjb25zdCBwZXJtdXRhdGlvbnNNYXRyaXggPSBbXTtcblxuICBmb3IgKGxldCBpbmRleGVzTGVuZ3RoID0gMDsgaW5kZXhlc0xlbmd0aCA8PSBNQVhJTVVNX0lOREVYRVNfTEVOR1RIOyBpbmRleGVzTGVuZ3RoKyspIHtcbiAgICBjb25zdCBwZXJtdXRhdGlvbnNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgcGVybXV0YXRpb25MZW5ndGggPSAwOyBwZXJtdXRhdGlvbkxlbmd0aCA8PSBNQVhJTVVNX1BFUk1VVEFUSU9OX0xFTkdUSDsgcGVybXV0YXRpb25MZW5ndGgrKykge1xuICAgICAgY29uc3QgcGVybXV0YXRpb25zID0gKChwZXJtdXRhdGlvbkxlbmd0aCA9PT0gMCkgfHwgKHBlcm11dGF0aW9uTGVuZ3RoID4gaW5kZXhlc0xlbmd0aCkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybXV0YXRpb25zRnJvbUluZGV4ZXNMZW5ndGhBbmRQZXJtdXRhdGlvbkxlbmd0aChpbmRleGVzTGVuZ3RoLCBwZXJtdXRhdGlvbkxlbmd0aCk7XG5cbiAgICAgIHBlcm11dGF0aW9uc0FycmF5LnB1c2gocGVybXV0YXRpb25zKTtcbiAgICB9XG5cbiAgICBwZXJtdXRhdGlvbnNNYXRyaXgucHVzaChwZXJtdXRhdGlvbnNBcnJheSk7XG4gIH1cblxuICByZXR1cm4gcGVybXV0YXRpb25zTWF0cml4O1xufVxuXG5mdW5jdGlvbiB3cml0ZVBlcm11dGF0aW9uc01hdHJpeEZpbGUoKSB7XG4gIGNvbnN0IHBlcm11dGF0aW9uc01hdHJpeCA9IHBlcm11dGF0aW9uc01hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgIHBlcm11dGF0aW9uc01hdHJpeEpTT04gPSBKU09OLnN0cmluZ2lmeShwZXJtdXRhdGlvbnNNYXRyaXgpLFxuICAgICAgICBwZXJtdXRhdGlvbnNNYXRyaXhGaWxlTmFtZSA9IFwiLi9iaW4vcGVybXV0YXRpb25zTWF0cml4LmpzXCIsXG4gICAgICAgIHBlcm11dGF0aW9uc01hdHJpeEZpbGVDb250ZW50ID0gYFwidXNlIHN0cmljdFwiO1xuICAgICAgICBcbmNvbnN0IHBlcm11dGF0aW9uc01hdHJpeCA9ICR7cGVybXV0YXRpb25zTWF0cml4SlNPTn07XG4gIFxuZXhwb3J0IGRlZmF1bHQgcGVybXV0YXRpb25zTWF0cml4OyAgICAgIFxuICBgO1xuXG4gIHdyaXRlRmlsZShwZXJtdXRhdGlvbnNNYXRyaXhGaWxlTmFtZSwgcGVybXV0YXRpb25zTWF0cml4RmlsZUNvbnRlbnQpXG59XG5cbmZ1bmN0aW9uIHBlcm11dGF0aW9uc0Zyb21DaG9pY2UoY2hvaWNlKSB7XG4gIGNvbnN0IHBlcm11dGF0aW9ucyA9IFtdLFxuICAgICAgICBjaG9pY2VMZW5ndGggPSBjaG9pY2UubGVuZ3RoO1xuXG4gIGlmIChjaG9pY2VMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBwZXJtdXRhdGlvbiA9IGNob2ljZS5zbGljZSgpO1xuXG4gICAgcGVybXV0YXRpb25zLnB1c2gocGVybXV0YXRpb24pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGlubmVyQ2hvaWNlID0gY2hvaWNlLnNsaWNlKDApLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgaW5kZXhlcyA9IGlubmVyQ2hvaWNlLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSBmaXJzdChpbmRleGVzKSxcbiAgICAgICAgICBpbm5lclBlcm11dGF0aW9ucyA9IHBlcm11dGF0aW9uc0Zyb21DaG9pY2UoaW5uZXJDaG9pY2UpO1xuXG4gICAgaW5uZXJQZXJtdXRhdGlvbnMuZm9yRWFjaCgoaW5uZXJQZXJtdXRhdGlvbikgPT4ge1xuICAgICAgZm9yIChsZXQgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IGNob2ljZUxlbmd0aDsgcG9zaXRpb24rKykge1xuICAgICAgICBjb25zdCBwZXJtdXRhdGlvbiA9IGlubmVyUGVybXV0YXRpb24uc2xpY2UoMCksXG4gICAgICAgICAgICAgIHN0YXJ0ID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgICAgICAgcGVybXV0YXRpb24uc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZmlyc3RJbmRleCk7XG5cbiAgICAgICAgcGVybXV0YXRpb25zLnB1c2gocGVybXV0YXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBlcm11dGF0aW9ucztcbn1cblxuZnVuY3Rpb24gcGVybXV0YXRpb25zRnJvbUNob2ljZXMoY2hvaWNlcykge1xuICBjb25zdCBwZXJtdXRhdGlvbnMgPSBbXTtcblxuICBjaG9pY2VzLmZvckVhY2goKGNob2ljZSkgPT4ge1xuICAgIGNvbnN0IGNob2ljZVBlcm11dGF0aW9ucyA9IHBlcm11dGF0aW9uc0Zyb21DaG9pY2UoY2hvaWNlKTtcblxuICAgIHB1c2gocGVybXV0YXRpb25zLCBjaG9pY2VQZXJtdXRhdGlvbnMpO1xuICB9KTtcblxuICByZXR1cm4gcGVybXV0YXRpb25zO1xufVxuXG5mdW5jdGlvbiBpbmRleGVzRnJvbUluZGV4ZXNMZW5ndGgoaW5kZXhlc0xlbmd0aCkge1xuICBjb25zdCBpbmRleGVzID0gW107XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGluZGV4ZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICBpbmRleGVzLnB1c2goaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIGluZGV4ZXM7XG59XG5cbmZ1bmN0aW9uIGNob2ljZXNGcm9tSW5kZXhlc0FuZENob2ljZUxlbmd0aChpbmRleGVzLCBjaG9pY2VMZW5ndGgpIHtcbiAgY29uc3QgY2hvaWNlcyA9IFtdLFxuICAgICAgICBpbmRleGVzTGVuZ3RoID0gaW5kZXhlcy5sZW5ndGg7XG5cbiAgaWYgKGNob2ljZUxlbmd0aCA9PT0gMCkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKGNob2ljZUxlbmd0aCA9PT0gMSkge1xuICAgIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBpbmRleGVzTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGluZGV4ZXNbcG9zaXRpb25dLFxuICAgICAgICAgICAgY2hvaWNlID0gW1xuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgXTtcblxuICAgICAgY2hvaWNlcy5wdXNoKGNob2ljZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGlubmVyQ2hvaWNlTGVuZ3RoID0gY2hvaWNlTGVuZ3RoIC0gMTtcblxuICAgIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBpbmRleGVzTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgICBjb25zdCBpbm5lckluZGV4ZXMgPSBpbmRleGVzLnNsaWNlKDApLFxuICAgICAgICAgICAgc3RhcnQgPSAwLCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gcG9zaXRpb24gKyAxLFxuICAgICAgICAgICAgZGVsZXRlZEluZGV4ZXMgPSBpbm5lckluZGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBsYXN0RGVsZXRlZEluZGV4ID0gbGFzdChkZWxldGVkSW5kZXhlcyksXG4gICAgICAgICAgICBpbmRleCA9IGxhc3REZWxldGVkSW5kZXgsIC8vL1xuICAgICAgICAgICAgaW5uZXJDaG9pY2VzID0gY2hvaWNlc0Zyb21JbmRleGVzQW5kQ2hvaWNlTGVuZ3RoKGlubmVySW5kZXhlcywgaW5uZXJDaG9pY2VMZW5ndGgpO1xuXG4gICAgICBpbm5lckNob2ljZXMuZm9yRWFjaCgoaW5uZXJDaG9pY2UpID0+IHtcbiAgICAgICAgY29uc3QgY2hvaWNlID0gW1xuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIC4uLmlubmVyQ2hvaWNlXG4gICAgICAgIF07XG5cbiAgICAgICAgY2hvaWNlcy5wdXNoKGNob2ljZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hvaWNlcztcbn1cblxuZnVuY3Rpb24gcGVybXV0YXRpb25zRnJvbUluZGV4ZXNMZW5ndGhBbmRQZXJtdXRhdGlvbkxlbmd0aChpbmRleGVzTGVuZ3RoLCBwZXJtdXRhdGlvbkxlbmd0aCkge1xuICBjb25zdCBjaG9pY2VMZW5ndGggPSBwZXJtdXRhdGlvbkxlbmd0aCwgLy8vXG4gICAgICAgIGluZGV4ZXMgPSBpbmRleGVzRnJvbUluZGV4ZXNMZW5ndGgoaW5kZXhlc0xlbmd0aCksXG4gICAgICAgIGNob2ljZXMgPSBjaG9pY2VzRnJvbUluZGV4ZXNBbmRDaG9pY2VMZW5ndGgoaW5kZXhlcywgY2hvaWNlTGVuZ3RoKSxcbiAgICAgICAgcGVybXV0YXRpb25zID0gcGVybXV0YXRpb25zRnJvbUNob2ljZXMoY2hvaWNlcyk7XG5cbiAgcmV0dXJuIHBlcm11dGF0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJ3cml0ZUZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwid3JpdGVQZXJtdXRhdGlvbnNNYXRyaXhGaWxlIiwicGVybXV0YXRpb25zTWF0cml4RnJvbU5vdGhpbmciLCJwZXJtdXRhdGlvbnNNYXRyaXgiLCJpbmRleGVzTGVuZ3RoIiwiTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCIsInBlcm11dGF0aW9uc0FycmF5IiwicGVybXV0YXRpb25MZW5ndGgiLCJNQVhJTVVNX1BFUk1VVEFUSU9OX0xFTkdUSCIsInBlcm11dGF0aW9ucyIsInBlcm11dGF0aW9uc0Zyb21JbmRleGVzTGVuZ3RoQW5kUGVybXV0YXRpb25MZW5ndGgiLCJwdXNoIiwicGVybXV0YXRpb25zTWF0cml4SlNPTiIsIkpTT04iLCJzdHJpbmdpZnkiLCJwZXJtdXRhdGlvbnNNYXRyaXhGaWxlTmFtZSIsInBlcm11dGF0aW9uc01hdHJpeEZpbGVDb250ZW50IiwicGVybXV0YXRpb25zRnJvbUNob2ljZSIsImNob2ljZSIsImNob2ljZUxlbmd0aCIsImxlbmd0aCIsInBlcm11dGF0aW9uIiwic2xpY2UiLCJpbm5lckNob2ljZSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJpbmRleGVzIiwic3BsaWNlIiwiZmlyc3RJbmRleCIsImZpcnN0IiwiaW5uZXJQZXJtdXRhdGlvbnMiLCJmb3JFYWNoIiwiaW5uZXJQZXJtdXRhdGlvbiIsInBvc2l0aW9uIiwicGVybXV0YXRpb25zRnJvbUNob2ljZXMiLCJjaG9pY2VzIiwiY2hvaWNlUGVybXV0YXRpb25zIiwiaW5kZXhlc0Zyb21JbmRleGVzTGVuZ3RoIiwiaW5kZXgiLCJjaG9pY2VzRnJvbUluZGV4ZXNBbmRDaG9pY2VMZW5ndGgiLCJpbm5lckluZGV4ZXMiLCJkZWxldGVkSW5kZXhlcyIsImxhc3REZWxldGVkSW5kZXgiLCJsYXN0IiwiaW5uZXJDaG9pY2VzIiwiaW5uZXJDaG9pY2VMZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7O3lCQUVvQztxQkFFRjt5QkFDaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5FLElBQU0sQUFBRUEsWUFBY0Ms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