class TimeZoneData {

    constructor(lat,lng){
        this.apikey="SUMB42MDU1HW";
        this.lat = lat;
        this.lng = lng; 
        this.dotContainer = document.querySelector(".dot-container");
        this.weatherContainer = document.querySelector(".weathertemplate #container"); 
    }
    openModal(){
        this.dotContainer.style.display = 'flex';
        this.weatherContainer.style.display = 'none';
      }
    closeModal(){
        this.dotContainer.style.display = ' none';
        this.weatherContainer.style.display = 'block';
    }
    async getTimeZoneData(){
        this.openModal();
        const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.timezonedb.com/v2.1/get-time-zone?key=${this.apikey}&format=json&by=position&lat=${this.lat}&lng=${this.lng}`);
        const data = await response.json();
        if(data){
            this.closeModal();
        }
        return data; 
    } 
}

