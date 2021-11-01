import React, {useState, useEffect,useRef} from 'react'

export const useFetch = (url) => {
    const isMounted = useRef(true)  // bandera para saber cuando se desmonta el hook
    const [state, setState] = useState({data:null,loading:true,error:null});

    useEffect(() => {
    
        return () => {
            isMounted.current = false    
        }
    }, [])  // al desmontar el componente se activa la bandera 
    useEffect(() => {
        setState({data:null,loading:true,error:null})
        fetch(url).then((resp) => resp.json()).then(data =>{
            if (isMounted.current){

                setState({
                    data :data,
                    loading:false,
                    error:null
                });
            }
            else {
                console.log('Desmontado')
            }
        })
    }, [url]);
    return state;
}
