import axios from 'axios';


const api = axios.create({
    baseURL: 'https://weather.contrateumdev.com.br/api/weather/city/'
})
export async function GetClima(cidade: any){
    const res = await api.get('?city='+`${cidade}`, cidade);
    return res;
}


const cidadesApi = axios.create({
    baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/regioes/1|2|3|4|5/municipios"
})
    export async function GetCidades(){
        const res = await cidadesApi.get('/')
        return res
    }
