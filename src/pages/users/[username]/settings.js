import { useRouter } from "next/router";

const page = () => {
    const query = useRouter();
    console.log('query', query);
    return (
        <div>
            <h1>This is settings page for {query.query.username}</h1>
        </div>
    )
}

export default page;