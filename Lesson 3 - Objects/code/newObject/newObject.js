(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function newObject(constructor) {
        var args = Array.prototype.slice.call(arguments, 1);
        var obj = Object.create(constructor.prototype); 
        
        // TODO: Dlaczego to daje dubluje __proto__ Object{__proto__: Person, __proto__ : Person} ?
        // var obj = Object.create(null);
        // obj.__proto__ = constructor.prototype;  
        // console.log(obj);

        constr_obj = constructor.apply(obj, args);
        if (constr_obj) {
            obj = constr_obj;
        }
        return obj;
    }

	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. 
    Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/

//call lub apply - tablica jako lista  parametrów

