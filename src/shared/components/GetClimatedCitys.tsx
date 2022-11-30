import { Autocomplete, Box, Button, Card, TextField } from "@mui/material"
import { useFormControl } from "@mui/material/FormControl"
import { useEffect, useState } from "react"
import { GetCidades, GetClima } from "../services/api"
import { 
            Drop, 
            ThermometerSimple, 
            Wind, 
            TrendUp, 
            TrendDown,
            Cloud,
            CloudFog,
            CloudLightning,
            CloudMoon,
            CloudRain, 
            Lightning,
            Moon,
            Sun, 
            Umbrella
        } from "phosphor-react"
import "./styles.css"
import image1 from "../assets/1.jpg"
import image2 from "../assets/2.jpg"
import image3 from "../assets/3.jpg"
import image4 from "../assets/4.jpg"
import image0 from "../assets/0.jpg"
type Repository = {
    name: string
    id: number
    main: {temp_min: number, temp_max: number, temp:number, humidity: number}
    wind: {speed: number}
    weather: [{description: string}]
}
type RepositoryCitys = {
    nome: string
    microrregiao: {mesorregiao:{UF: {nome: string}}}
}

function GetClimatedCitys (){
    const [getCidades, set_GetCidades] = useState<RepositoryCitys[]>([])
    const [clima, set_clima] = useState<Repository[]>([])
    const [cidade, set_cidade]= useState<String | null>(null)
    const [hours, set_hours] = useState(0)
    const [minutes, set_minutes] = useState(0)
    const [days, set_day] = useState(0)
    const [months, set_month] = useState(0)
    const [years, set_year] = useState(0)
    async function Clima(){
        await GetClima(cidade_split)
        .then(res =>{
            set_clima([res.data])
            var time = new Date();
            var hour = time.getHours();
            var minute = time.getMinutes();
            var day = time.getDate()
            var month = time.getMonth()
            var year = time.getFullYear();
            if(minute < 10 ) minute = "0" + minute
            if(hour < 10 ) hour = "0" + hour
            set_hours(hour)
            set_minutes(minute)
            set_day(day)
            set_month(month)
            set_year(year)
        })
    }

    async function Cidades(){

        await GetCidades()
        .then(res =>{
            set_GetCidades(res.data)
        })
    }

    useEffect(() => {
        Cidades()
        RandomImage()

    },[])

    const Citys = getCidades.map(e => (e.nome +' - '+ e.microrregiao.mesorregiao.UF.nome))
    const cidade_split = cidade?.split(' - ', 1)
    const [Image, set_Image] = useState('')
    function RandomImage(){
        if(Math.floor(Math.random() *4) == 1){
            set_Image(image1)
            console.log(1)
        }
        if(Math.floor(Math.random() *4) == 2){
            set_Image(image2)
            console.log(2)
        }
        if(Math.floor(Math.random() *4) == 3){
            set_Image(image3)
            console.log(3)
        }
        if(Math.floor(Math.random() *4) == 4){
            set_Image(image4)
            console.log(4)
        }
        if(Math.floor(Math.random() *4) == 5){
            set_Image(image0)
            console.log(5)
        }

        
    }

    return(
        <div className="content" style={{backgroundImage: `url(${Image})`}}> 
            
            <div className={"Card"}>
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" marginBottom="1.5em">
                <div  >
                    <Autocomplete
                        options={Citys}
                        sx={{width: '60vw'}}
                        freeSolo
                        onChange={((e: any, newValue: string |null) => {set_cidade(newValue)})}
                        renderInput={(e) => 
                            <TextField
                                {...e}
                                onChange={e => set_cidade(e.target.value)}
                                autoFocus={true}
                                className="TextField"
                                label="Nome da Cidade" 
                                variant="outlined"
                                color={"secondary"} 
                                id="busca" 
                                InputLabelProps={{className: "TextField"}}
                                value={cidade} 
                            />
                        }
                    
                    />
                </div>
                <br/>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={Clima} 
                    disabled={!cidade} 
                    className="Button_search"
                ><span style={!cidade?{color:"darkgray"}:{color:"white"}}>Buscar</span></Button>

            </Box>
                <ul style={{listStyle:"none"}}>
                        {
                            clima.map(e =>
                            <li>
                                <div className="card_content">
                                    <div id="name"> 
                                        <h1>{e.name} </h1>
                                        <h2 id="temp">  {e.main.temp.toFixed()}° <ThermometerSimple /></h2>
                                        <h2 id="description">{e.weather[0].description}</h2>
                                    </div>
                                    
                                    <div className="information">
                                        <div className="information_dual">
                                            <div className="information_dual">
                                                <Drop size="22" color="white"/> 
                                                <h2>{e.main.humidity.toFixed()}%</h2>
                                            </div>
                                            <div className="information_dual">
                                                <Wind size="22" color="white"/>
                                                <h2>{e.wind.speed}</h2>
                                            </div>
                                        </div>
                                        <div className="information_dual">
                                            <div className="information_dual">
                                                <TrendDown size="22" color="white"/> 
                                                <h2>{e.main.temp_min.toFixed()}°C</h2>
                                            </div>
                                            <div className="information_dual">
                                                <TrendUp size="22" color="white" ></TrendUp>
                                                <h2>{e.main.temp_max.toFixed()}°C</h2>
                                            </div>
                                        </div>
                                        <div className="information_hours">
                                            <h2>{[days,"/",months,"/",years," - ", hours,":",minutes]}</h2>
                                        </div>
                                        
                                    </div>
                                </div>
                            </li>
                            )
                        }
                    </ul>
               </div>
        </div>
    )


}
export default GetClimatedCitys