'use client'
import './style.sass'
import styled from 'styled-components';
import { useEffect, useState } from 'react';

interface Country {
    name: string;
  }
  
  interface Match {
    id: string;
    country: Country;
    competition_name: string;
    added: string;
    scheduled: string;
    time: string;
    home_name: string;
    status: string;
    score: string;
    away_name: string;
  }
  
  interface ApiResponse {
    data: {
      match: Match[];
    };
  }

async function getData(): Promise<ApiResponse> {
    const res = await fetch("https://livescore-api.com/api-client/scores/live.json?&key=ZYOCZXSKGQ93bsne&secret=nUG6Kign3fEKCi8BgXegV60CXaF8D2n0&competition_id=2,77,82,83,154,155,152,149,150,151,153,1,93,166,167,169,3,79,332,333,334,4,87,181,179,178,180,182,24,95,253,255,256,459,440,463,441,461,438,442,444,460,439,443,423,430,425,431,422,23,96,230,232,233,236,67,122,250,251,26,263,262,264,26,263,262,264,5,97,161,162,163,160,6,344,345,347,348,68,136,99,137,17,141,142,40,147,148,102,45,98,117,296,49,388,8,92,211,212,213,451,305,306,307,75,317,105,316,318,319,320,313,314,315,476,64,353,115,352,76,383,118,384,48,401,465,14,336,335,337,15,338,339,340", { cache: 'no-store' }) 
    console.log(res)
    return res.json()
}

const Score = styled.p<{ status?: string; }>`
  color: ${props => props.status === 'IN PLAY' ? 'green' : 'black'};
`;


const ApiTest2: React.FC =  () => {
    const [matches, setMatches] = useState<Match[]>([]);

    const fetchData = async () => {
    const info = await getData();
    setMatches(info.data.match);
    };

    const formatDate = (inputDate: string) => {
        const [year, month, day] = inputDate.split('-');
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
      };
      

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 60000);
    alert('Прийшли нові данні з сервера')
    return () => clearInterval(intervalId);
  }, []);

    return (
        <div className="box">
            {matches.map(({id, country, competition_name, added, scheduled, time, home_name, status, score, away_name}) => (
                <div className='container' key={id}>
                    <div className='country'>
                        <p>{country.name}: {competition_name}</p>
                    </div>
                    <div className='date'>
                        <p>{formatDate(added.split('').slice(0,10).join(''))}</p>
                    </div>
                    <div className='teams'>
                        <p>{scheduled}</p>
                        <p className='time'>{time}</p>
                        <p>{home_name}</p>
                        <Score status={status}>{score}</Score>
                        <p>{away_name}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ApiTest2