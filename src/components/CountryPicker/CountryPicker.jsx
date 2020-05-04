import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'
const CountryPicker = (props)=>{
    const [fetchedCountries,setFetchedCountries] = useState([])
    useEffect(()=>{
        const fetchAPI = async ()=>{
            setFetchedCountries(await fetchCountries())
        }

        fetchAPI()
    },[setFetchedCountries])
    console.log(fetchedCountries,'fetchedCountries')
    let {handleCountryChange} = props
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
            <option value="">Global</option>
                {fetchedCountries.length ? fetchedCountries.map((country,i)=>
                    <option key={i} value={country}>{country}</option>
                ): null}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker