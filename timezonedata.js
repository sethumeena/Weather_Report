
class TimeZoneData {
    
    constructor(lat,lng){
        this.apikey="SUMB42MDU1HW";
        this.lat = lat;
        this.lng = lng;
        
    }

    async getTimeZoneData(){

        const response = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${this.apikey}&format=json&by=position&lat=${this.lat}&lng=${this.lng}`);
        const data = await response.json();
        return data; 
    }

  
}

