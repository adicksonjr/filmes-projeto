import React, { useEffect, useState } from 'react';
import { getListaFilmes } from '../../api/api';

const Painel = () => {
    const [filmes, setFilmes] = useState(null)
    useEffect(()=>{
        if(!filmes){
            // setFilmes({Title: 'teste'})
            getListaFilmes((dados)=>{
                console.log(dados)
                setFilmes(dados)
            })
        }
    },[filmes])

    return (
        <div>
            {filmes && filmes.Title}
        </div>
    );
};

export default Painel;