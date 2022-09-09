# Feladatok

1. Feladat 
- Adott 3 json fájl:  `users1`, `users2`, és `users3` névvel.  
- Mindegyik fájl felhasználók nevét, és életkorát tartalmazza az
- Írd meg a `request`, `handleError`, `handleLoad` függvények törzsét az `ajaxRequest.js` fájlban!
- A `request` egy xmlHttp kérést indít az adott erőforrás elérésére az adott metódussal.  
- Az `onload` eseményre a `handleLoad` függvény fusson le.
- Ha az adott erőforrás nem elérhető, próbálja meg még `retryCount` alkalommal elérni azt. 
- Két hívás között legyen `delay` ezredmásodperc várakozási idő. 
- Ha az erőforrás elérhető volt, akkor a `successCallback` függvényt kell meghívni, ez paraméterként a `responseText`-et kapja meg.
- Ha `retryCount` alkalommal sem lehet  elérni az erőforrást, meg kell hívni a `handleError` függvényt, a paraméter ilyenkor: `Resource not avaiable: ${url}`
- Az `onerror` eseménynél a `handleError` függvényt kell meghívni, paraméterként az `Error` objektum `message` propertyjét átadva.
- Csak a 3 függvényt törzsét írd meg!
- Használd fel a már megírt két `store` fájlt a megoldáshoz!
- Új függvényeket nem kell létrehoznod!
- A `main` fájl már készen van!