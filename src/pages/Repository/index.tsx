import React, {useState, useEffect} from 'react'
import {FiChevronsLeft, FiChevronsRight} from 'react-icons/fi';
import {useRouteMatch, Link} from 'react-router-dom';
import {Header, RepositoryInfo, Issues} from './styles';
import logo from '../../assets/image/logo.svg';
import api from '../../services/api';

interface RepositoryParams{
    repository: string;
}

interface RepositoryItem{
    full_name: string;
    description: string;
    stargazers_count: string;
    forks_count: string;
    open_issues_count: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

interface Issue{
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;

    }
}

const Repository: React.FC = () => {

    const {params} = useRouteMatch<RepositoryParams>();
    
    const [repository, setRepository] = useState<RepositoryItem | null>(null)
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(()=>{

        async function loadData(){

            const [repo, issue] = await Promise.all([
                api.get(`/repos/${params.repository}`),
                api.get(`/repos/${params.repository}/issues`)
            ])

            setRepository(repo.data);
            setIssues(issue.data);

        }

        loadData();


    },[params.repository]);

    return (
        <>
            <Header>
                <img src={logo} alt="logo"/>
                <Link to="/">
                    <FiChevronsLeft size={16} />
                </Link>
            </Header>
            {repository && 
                    <RepositoryInfo>
                        <header>
                            <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                            <div>
                                <strong>{repository.full_name}</strong>
                                <p>{repository.description}</p>
                            </div>
                        </header>
                        <ul>
                            <li>
                                <strong>
                                    {repository.stargazers_count}
                                </strong>
                                <span>Stars</span>
                            </li>
                            <li>
                                <strong>
                                    {repository.forks_count}
                                </strong>
                                <span>Forks</span>
                            </li>
                            <li>
                                <strong>
                                    {repository.open_issues_count}
                                </strong>
                                <span>Issues abertas</span>
                            </li>
                        </ul>
                    </RepositoryInfo>        
            }
            <Issues>
                {
                    issues.map(issue=>
                        <a key={issue.id} target="_blank" href={issue.html_url} rel="noreferrer">
                            <div>
                                <strong>{issue.title}</strong>
                                <p>{issue.user.login}</p>
                            </div>
                            <FiChevronsRight size={20} />
                        </a>
                    )
                }

            </Issues>
        </>
    )
}

export default Repository;