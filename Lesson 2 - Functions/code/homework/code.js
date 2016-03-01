(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.aircrafts = [];
    
    //////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Sample aircraft with sample service  /////////////// 
    
    global.UAM.aircrafts.push({
        code: 'SP-ABC',
        services: []
    });
    
    global.UAM.aircrafts[0].services.push({
        name: 'smth1',
        timeToExecute: 120
    });
    
    //////////////////////////////////////////////////////////////////////////////////////

    global.UAM.addAircraft = function (newAircraftCode) {
        var aircraft = {
            code: newAircraftCode,
            services: []
        }
        global.UAM.aircrafts.push(aircraft);
        return aircraft;
        // function should return new aircraft object
    };

    global.UAM.removeAircraft = function (aircraftObj) {
        var i = global.UAM.aircrafts.indexOf(aircraftObj);
        if(i != -1) {
            global.UAM.aircrafts.splice(i, 1);
        }	
	   //global.UAM.aircrafts.pop(aircraftObj); 
	       
    };

    global.UAM.addWorkToAircraft = function(aircraftObj, name, timeToExecute) {
        var i = global.UAM.aircrafts.indexOf(aircraftObj);
        if(i != -1) {	
            global.UAM.aircrafts[i].services.push({
                name: name,
                timeToExecute: timeToExecute
            });	
        }
    };
        
    global.UAM.reduceTimeToExecute = function(aircraftObj, time) {
        var i = global.UAM.aircrafts.indexOf(aircraftObj);
        if(i != -1) {	
            if(global.UAM.aircrafts[i].services instanceof Array) {
                global.UAM.aircrafts[i].services.forEach(function(entry) {
                    if(typeof entry.timeToExecute == "number") 					{				
                        entry.timeToExecute -= time;		
                    }
                });
            }
        }
    };
    
    global.UAM.getAircraftsForRepairs = function(maxTimeToExecute) {
        var aircraftsForRepairs = []
        var i;
        global.UAM.aircrafts.forEach(function(aircraft) {

            if(aircraft.services instanceof Array) {
                for(i = 0; i < aircraft.services.length; ++i) {
                    if(typeof aircraft.services[i] != "undefined" && typeof aircraft.services[i].timeToExecute == "number" && aircraft.services[i].timeToExecute <= maxTimeToExecute) 					{				
                        aircraftsForRepairs.push(aircraft);	
                        break;
                    }
                }

            }				
        });
        return aircraftsForRepairs;
    };

}(window));

/*

Przykład użycia:

var newAircraft1 = addAircraft('SP-XY1');
var newAircraft2 = addAircraft('SP-XY2');

addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
reduceTimeToExecute(newAircraft1, 20);

var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft1 ]

removeAircraft(newAircraft1);

getAircraftsForRepairs(100); // []

reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft2 ]

*/
