//Intructions to every other class on how to be an 'addMarker
export interface Mappable{    
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
    color: string;
}

//Create a reference to the google maps
export class CustomMap{
    private googleMap: google.maps.Map;

    constructor(divId?: string){
        const id = $('#map')[0]
        this.googleMap = new google.maps.Map(id,{
            zoom:1,
            center:{
                lat:0,
                lng:0
            }
        }
        ); 
    }

    /*TYpecript is going to restrict all the diferent propieties that are not the same on the two tipes
    */
    addMarker(mappable: Mappable): void{
        const marker = new google.maps.Marker({
            map:this.googleMap,
            position: {
                lat:mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            //When we click in our marker we are going to create a new InfoWindow object and open it
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });

    }





}