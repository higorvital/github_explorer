import React, {useState, useEffect, FormEvent} from 'react'
import {FiChevronRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import api from '../../services/api';
import {Title, Form, Repositories, Error} from './styles';
import logo from '../../assets/image/logo.svg'

interface Repository{
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {

    const [inputError, setInputError] = useState('');
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(()=>{
        
        const repos = localStorage.getItem('@GithubExplorer:repositories');

        if(repos){
            return JSON.parse(repos);
        }else{
            return [];
        }

    });

    useEffect(()=>{

        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));

    }, [repositories]);

    async function handleNewRepo(event: FormEvent<HTMLElement>){
        event.preventDefault();

        if(!newRepo){
            setInputError('Escreva o autor/nome do repositório');
            return;
        }

        try{
            
            const response = await api.get<Repository>(`/repos/${newRepo}`);

            const newRepository = response.data;
    
            setRepositories([...repositories, newRepository]);
            setNewRepo('');
            setInputError('');
        
        }catch(err){
            setInputError('autor/nome do repositório inválido')
        }

    }

    return (
        <>
            <img src={logo} height={30} alt="logo"/>
            <Title>Explore repositórios no Github</Title>

            <Form hasError={!! inputError}  onSubmit={handleNewRepo}>
                <input 
                    type="text" 
                    placeholder="Digite aqui"
                    value={newRepo}
                    onChange = {(e)=> setNewRepo(e.target.value)}
                />
                <button>Pesquisar</button>
            </Form>
            { inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map(repository =>                     
                    <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
                        <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </Link>    
                )}
            </Repositories>
        </>
    )
}

export default Dashboard;