
class TimeZoneData {
    
    constructor(lat,lng){
        this.apikey="SUMB42MDU1HW";
        this.lat = lat;
        this.lng = lng;
        var a ='one'
        console.log(a)
    }

    async getTimeZoneData(){
        console.log(a)
        const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.timezonedb.com/v2.1/get-time-zone?key=${this.apikey}&format=json&by=position&lat=${this.lat}&lng=${this.lng}`);
        const data = await response.json();
        return data; 
    }

  
}

