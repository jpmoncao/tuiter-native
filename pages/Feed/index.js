import { useEffect, useState } from "react"
import { View, FlatList } from "react-native"
import Tuite from '../../components/Tuite'

let total = 0;
const limit = 10;

export default function Feed() {

    const [tuites, setTuites] = useState([]);
    const [skip, setSkip] = useState(0);

    async function loadTuites() {
        if (total != 0 && total <= skip) return;

        const tuitesData = await fetch(`https://dummyjson.com/posts?limit=${limit}&select=id,title,body,reactions,userId&skip=${skip}`)
            .then(res => res.json());

        const updatedTuites = [];
        for (const tuite of tuitesData.posts) {
            const usersData = await fetch(`https://dummyjson.com/users/filter?select=id,firstName,lastName,username,image&key=id&value=${tuite.userId}`)
                .then(res => res.json());
            const tuiteWithUser = { ...tuite, user: usersData.users[0] };
            updatedTuites.push(tuiteWithUser);
        }

        setTuites([...tuites, ...updatedTuites]);
        setSkip(skip + limit)
        console.log(skip)
        total = tuitesData.total;
    }

    useEffect(() => {
        loadTuites();
    }, []);

    return (
        <View>
            <FlatList
                data={tuites}

                onEndReached={() => loadTuites()}
                onEndReachedThreshold={0.5}

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