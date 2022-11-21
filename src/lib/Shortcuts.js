
const m$ = (element) => Msg.add(element);
const i$ = (label, element) => Inp.add(label, element);
const i1$ = (label, element) => Inp.displayOnce(label, element);
const go$ = (gotoElement) => Nav.go(gotoElement);
const once$ = (first, later) => ShowOnce(first, later);
const rnd$ = (arr) => OneOf(arr);
