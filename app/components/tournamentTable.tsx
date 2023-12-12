'use client'
import { useState, useEffect } from "react"
import '../styles/tournamentTable.sass'

interface TeamInfo {
    position: number;
    name: string;
    'all-matches': {
      played: number;
      won: number;
      drawn: number;
      lost: number;
      for: number;
      against: number;
      'goal-difference': number
    };
    'total-points': number
  }
  
  
  interface TableBoxTypes {
    info?: TeamInfo[];
  }

const TableBox: React.FC<TableBoxTypes> = ({ info }) => {
    const [ data, setData ] = useState(info)
    
    //console.log(data)

    return (
        <div className="box">
            {data?.map(i => {
                return (
                    <div className="teamStats" key={i.name}>
                        <p className="stat">{i.position}</p>
                        <p className="name">{i.name}</p>
                        <p className="stat">{i['all-matches'].played}</p>
                        <p className="stat">{i['all-matches'].won}</p>
                        <p className="stat">{i['all-matches'].drawn}</p>
                        <p className="stat">{i['all-matches'].lost}</p>
                        <p className="stat">{i['all-matches'].for}</p>
                        <p className="stat">{i['all-matches'].against}</p>
                        <p className="stat">{i['all-matches']['goal-difference']}</p>
                        <p className="stat">{i['total-points']}</p> 
                    </div>
                )
            })}
        </div>
    )
}

export default TableBox