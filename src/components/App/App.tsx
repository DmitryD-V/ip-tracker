import React, {useEffect, useState} from 'react';
import GlobalStyle, {Container, Content, Title} from './styles';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
import Map from '../Map/Map';

interface IpDataResponse {
    ip: string
    success: boolean
    type: string
    "continent": string
    "continent_code": string
    "country": string
    "country_code": string
    "region": string
    "region_code": string
    "city": string
    "latitude": number
    "longitude": number
    "is_eu": false,
    "postal": string
    "calling_code": string
    "capital": string
    "borders": string
    "flag": {
        "img": string
        "emoji": string
        "emoji_unicode":string
    },
    "connection": {
        "asn": number
        "org": string
        "isp": string
        "domain": string
    },
    "timezone": {
        "id": string
        "abbr": string
        "is_dst": boolean
        "offset": number
        "utc": string
        "current_time": string
    }
}

const App = () => {

    const [ipData, setIpData] = useState<IpDataResponse | null>(null)
    const [error, setError] = useState('')

    useEffect(() => {
        getIpData()
    }, [])
    const getIpData = async (ip?: string) => {
        setError('')
        try {
            const fetchedIpData = await (await fetch(`https://ipwho.is/${ip || ''}`)).json()
            if(fetchedIpData.success) {
                setIpData(fetchedIpData)
            } else {
                setError(fetchedIpData.message)
            }
        } catch (error) {
            setError('Some error')
        }
    };

    return (
        <Container>
            <Content>
                <Title>IP Address Tracker</Title>
                <SearchForm onSearch={getIpData} error={error}/>
                <SearchResult
                    ipAddress={ipData?.ip || '-'}
                    location={ipData ? `${ipData.continent}, ${ipData.country}, ${ipData.city}` : '-'}
                    timezone={ipData ? `UTS${ipData.timezone.utc}` : '-'}
                    isp={ipData?.connection.isp || '-'}
                />
            </Content>
            <Map markerCoords={ipData ? { lat: ipData.latitude, lng: ipData.longitude } : undefined}/>
            <GlobalStyle/>
        </Container>
    );
}

export default App;
