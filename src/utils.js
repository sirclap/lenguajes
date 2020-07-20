const _head = ([primero]) => primero;

const _tail = ([primero, ...resto]) => resto;

const _init = ([...datos]) => datos.slice(0, -1);

const _last = ([...datos]) => datos.slice(-1);

const _concat = (a, b) => [...a, ...b];

const _concatAll = (...datos) => datos.flatMap(x => x);

const _clone = objeto => ({...objeto});

const _merge = (a, b) => ({...b, ...a});

const _isBookRead = (books, titleSearch) => books.some((el) => el.title === titleSearch && el.isRead === true) 

export {_head as head };
export {_tail as tail };
export {_init as  init };
export {_last as last };
export {_concat as concat};
export {_concatAll as concatAll};
export {_clone as clone};
export {_merge as merge};
export {_isBookRead as isBookRead};