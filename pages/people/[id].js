export const getStaticPaths = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();

    const paths = data.map(person => {
        return {
            params: { id: person.id.toString() }
        }
    });

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const result = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await result.json();
    return {
        props: { person: data }
    }
}

const Person = ({ person }) => {
    return (
        <div>
            <h1>Details</h1>
            <h2> {person.name} Profile Page</h2>
            <p>{person.email}</p>
            <p>{person.website}</p>
        </div>
    )
}

export default Person;