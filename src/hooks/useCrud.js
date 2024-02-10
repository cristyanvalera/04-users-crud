import axios from "axios";
import { useState } from "react";

export const useCrud = (urlBase) => {
    const [apiData, setApiData] = useState();

    const getApi = (path) => {
        axios.get(`${urlBase}${path}/`)
            .then(response => setApiData(response.data))
            .catch(error => console.log(error));
    };

    const createApi = (path, data) => {
        axios.post(`${urlBase}${path}/`, data)
            .then(response => {
                setApiData([...apiData, response.data]);
                console.log(response.data);
            })
            .catch(error => console.log(error));
    };

    const deleteApi = (path, id) => {
        axios.delete(`${urlBase}${path}/${id}/`)
            .then(() => {
                setApiData(apiData.filter(item => item.id !== id));
                console.log('Borrado con éxito');
            })
            .catch(error => console.log(error));
    };

    const updateApi = (path, id, data) => {
        axios.patch(`${urlBase}${path}/${id}/`, data)
            .then(response => {
                setApiData(apiData.map(item =>
                    item.id === id ? response.data : item
                ));
                console.log(response);
            })
            .catch(error => console.log(error));
    };

    return [apiData, getApi, createApi, deleteApi, updateApi];
};
