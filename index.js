'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var app = require('firebase/app');
var lite = require('firebase/firestore/lite');

var SimpleFirestoreContext = react.createContext({
    firestore: null,
});
var SimpleFirestoreProvider = function (_a) {
    var config = _a.config, children = _a.children;
    var app$1 = app.initializeApp(config);
    var firestore = lite.getFirestore(app$1);
    return (jsxRuntime.jsx(SimpleFirestoreContext.Provider, { value: { firestore: firestore }, children: children }));
};
var useSimpleFirestoreProviderContext = function () {
    return react.useContext(SimpleFirestoreContext);
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var getAllItems = function (firestore, collectionName) { return __awaiter(void 0, void 0, void 0, function () {
    var project, docsData, items;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                project = lite.collection(firestore, collectionName);
                return [4 /*yield*/, lite.getDocs(project)];
            case 1:
                docsData = _a.sent();
                items = docsData.docs.map(function (doc) { return doc.data(); });
                return [2 /*return*/, items];
        }
    });
}); };

var addItem = function (firestore, item, collectionName) { return __awaiter(void 0, void 0, void 0, function () {
    var project, newDoc, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                project = lite.collection(firestore, collectionName);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, lite.addDoc(project, item)];
            case 2:
                newDoc = _a.sent();
                return [4 /*yield*/, lite.updateDoc(lite.doc(firestore, collectionName, newDoc.id), {
                        id: newDoc.id,
                    })];
            case 3:
                _a.sent();
                return [2 /*return*/, __assign(__assign({}, item), { id: newDoc.id })];
            case 4:
                e_1 = _a.sent();
                console.error(e_1);
                return [2 /*return*/, null];
            case 5: return [2 /*return*/];
        }
    });
}); };

var removeItems = function (firestore, ids, collectionName) { return __awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Promise.all(ids.map(function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, lite.deleteDoc(lite.doc(firestore, collectionName, id))];
                    }); }); }))];
            case 1:
                _a.sent();
                return [2 /*return*/, true];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                return [2 /*return*/, false];
            case 3: return [2 /*return*/];
        }
    });
}); };

var useCollection = function (collectionName) {
    var firestore = useSimpleFirestoreProviderContext().firestore;
    var _a = react.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react.useState([]), collection = _b[0], setCollection = _b[1];
    var initialized = !!firestore;
    var addItem$1 = function (item) { return __awaiter(void 0, void 0, void 0, function () {
        var newItem;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!initialized) {
                        return [2 /*return*/, false];
                    }
                    return [4 /*yield*/, addItem(firestore, item, collectionName)];
                case 1:
                    newItem = _a.sent();
                    if (newItem) {
                        setCollection(function (current) { return __spreadArray(__spreadArray([], current, true), [newItem], false); });
                    }
                    return [2 /*return*/, !!newItem];
            }
        });
    }); };
    var removeItems$1 = function (ids) { return __awaiter(void 0, void 0, void 0, function () {
        var success;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!initialized) {
                        return [2 /*return*/, false];
                    }
                    return [4 /*yield*/, removeItems(firestore, ids, collectionName)];
                case 1:
                    success = _a.sent();
                    if (success) {
                        setCollection(function (current) {
                            return current.filter(function (item) { return item.id && !ids.includes(item.id); });
                        });
                    }
                    return [2 /*return*/, success];
            }
        });
    }); };
    react.useEffect(function () {
        if (!initialized) {
            return;
        }
        getAllItems(firestore, collectionName).then(function (res) {
            setCollection(res);
            setLoading(false);
        });
    }, [initialized]);
    return {
        loading: loading,
        collection: collection,
        addItem: addItem$1,
        removeItems: removeItems$1,
    };
};

var index = {
    SimpleFirestoreProvider: SimpleFirestoreProvider,
    useCollection: useCollection,
};

module.exports = index;
