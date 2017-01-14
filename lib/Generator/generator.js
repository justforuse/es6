"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _marked = [iterEntries].map(regeneratorRuntime.mark);

function iterEntries(obj) {
	var keys, i, key;
	return regeneratorRuntime.wrap(function iterEntries$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					keys = Object.keys(obj);
					i = 0;

				case 2:
					if (!(i < keys.length)) {
						_context.next = 9;
						break;
					}

					key = keys[i];
					_context.next = 6;
					return [key, obj[key]];

				case 6:
					i++;
					_context.next = 2;
					break;

				case 9:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}

var myObj = {
	"name": "allen",
	"age": 23,
	1: "1111"
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = iterEntries(myObj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var _step$value = _slicedToArray(_step.value, 2),
		    key = _step$value[0],
		    value = _step$value[1];

		console.log(key, value);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}