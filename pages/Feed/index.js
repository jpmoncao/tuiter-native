import { useEffect, useState } from "react"
import { View, FlatList } from "react-native"
import Tuite from '../../components/Tuite'

let total = 0;
const limit = 15;

export default function Feed() {
    const [tuites, setTuites] = useState([]);
    const [skip, setSkip] = useState(0);

    async function loadTuites() {
        console.log(tuites)
        const tuitesData = await fetch(`https://dummyjson.com/posts?limit=${limit}&select=id,title,body,reactions,userId&skip=${skip}`)
            .then(res => res.json());

        const updatedTuites = [];
        for (const tuite of tuitesData.posts) {
            const usersData = await fetch(`https://dummyjson.com/users/filter?select=id,firstName,lastName,username,image&key=id&value=${tuite.userId}`)
                .then(res => res.json());
            const tuiteWithUser = { ...tuite, user: usersData.users[0] };
            updatedTuites.push(tuiteWithUser);
        }

        setTuites(updatedTuites);
        total = tuitesData.total;
    }

    useEffect(() => {
        loadTuites();
        console.log(skip)
    }, [skip]);

    return (
        <View>
            <FlatList
                data={tuites}

                onEndReached={() => setSkip(skip + limit)}
                onEndReachedThreshold={0.1}

                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <Tuite
                        name={item.user.firstName + ' ' + item.user.lastName}
                        username={item.user.username}
                        content={item.body}
                    />
                }
            />
        </View>
    )
}