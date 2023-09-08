import { randomId } from '@mieuteacher/meomeojs';
import React, { useEffect, useMemo, useState } from 'react'
import TableUsers from './Table';

export default function Form() {
    const [users, setUsers] = useState([]);
    function addUser(e) {
        e.preventDefault();
        let user = {
            id: randomId(),
            name: e.target.user.value,
            score: 0,
        }
        setUsers([user, ...users]);

    }
    useEffect(() => {

    }, [users]);

    function deletePlayer(userID) {
        setUsers(users.filter(user => user.id != userID))
    }

    function scorePlayer(userID, type) {
        setUsers(users.map(user => {
            if (user.id == userID) {
                if (type == '-') {
                    if (user.score == 0) {
                        return user
                    } else {
                        user.score -= 1;
                    }

                }
                if (type == '+') {
                    user.score += 1;
                }
            }
            return user
        }))

    }
      let totalPlayers = useMemo(() => {
          return users.length
      },[users])
    let result = 0;
    let totalPoints = useMemo(() => {
        for (let i = 0; i < users.length; i++) {
            result += users[i].score;
        }
        return result
    }, [users])
    return (
        <div>
            <div id="container">
                <span id='Nav_players'>Players: {totalPlayers}</span>
                <span id='Nav_total'>Total Points: {totalPoints} </span>
            </div>

            <TableUsers users={users} setUsers={setUsers} deletePlayer={deletePlayer} scorePlayer={scorePlayer} />
            <form id='form' onSubmit={(e) => {
                addUser(e)
            }
            }>
                <input type="text" name='user' placeholder='Enter a player name' />
                <button type="submit" className="btn btn-light">ADD PLAYER</button>
            </form>
        </div>
    )
}
