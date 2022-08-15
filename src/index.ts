
/* import { User } from './User'
import { Company} from './Company'
 */

//Create an html element and pass as an argument
const mapDiv = $('#map')[0]

new google.maps.Map(mapDiv,{
    zoom:1,
    center:{
        lat:0,
        lng:0
    }
}
); 