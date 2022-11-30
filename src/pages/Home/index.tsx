import { useEffect, useState } from "react"
import GetClimatedCitys from "../../shared/components/GetClimatedCitys"
import './styles.css'

function HomePage (){
    return(
        <div>
            <GetClimatedCitys />
        </div>
    )
}
export default HomePage