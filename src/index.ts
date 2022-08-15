
import { User } from './User'
import { Company} from './Company'

import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
//Create an html element and pass as an argument
const customMap = new CustomMap();

customMap.addMarker(company)
customMap.addMarker(user);



