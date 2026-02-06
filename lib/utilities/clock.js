"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get startClock () {
        return startClock;
    },
    get stopClock () {
        return stopClock;
    }
});
function stopClock(now, log) {
    var then = now; ///
    now = Date.now();
    var seconds = Math.floor(now - then) / 1000;
    log.info("Time ".concat(seconds, " seconds."));
}
function startClock() {
    var now;
    now = Date.now();
    return now;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2xvY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wQ2xvY2sobm93LCBsb2cpIHtcbiAgY29uc3QgdGhlbiA9IG5vdzsgLy8vXG5cbiAgbm93ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihub3cgLSB0aGVuKSAvIDEwMDA7XG5cbiAgbG9nLmluZm8oYFRpbWUgJHtzZWNvbmRzfSBzZWNvbmRzLmApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRDbG9jaygpIHtcbiAgbGV0IG5vdztcblxuICBub3cgPSBEYXRlLm5vdygpO1xuXG4gIHJldHVybiBub3c7XG59XG4iXSwibmFtZXMiOlsic3RhcnRDbG9jayIsInN0b3BDbG9jayIsIm5vdyIsImxvZyIsInRoZW4iLCJEYXRlIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVlnQkE7ZUFBQUE7O1FBVkFDO2VBQUFBOzs7QUFBVCxTQUFTQSxVQUFVQyxHQUFHLEVBQUVDLEdBQUc7SUFDaEMsSUFBTUMsT0FBT0YsS0FBSyxHQUFHO0lBRXJCQSxNQUFNRyxLQUFLSCxHQUFHO0lBRWQsSUFBTUksVUFBVUMsS0FBS0MsS0FBSyxDQUFDTixNQUFNRSxRQUFRO0lBRXpDRCxJQUFJTSxJQUFJLENBQUMsQUFBQyxRQUFlLE9BQVJILFNBQVE7QUFDM0I7QUFFTyxTQUFTTjtJQUNkLElBQUlFO0lBRUpBLE1BQU1HLEtBQUtILEdBQUc7SUFFZCxPQUFPQTtBQUNUIn0=