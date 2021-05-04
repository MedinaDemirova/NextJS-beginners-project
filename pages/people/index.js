export const getStaticProps = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    return {
        props: { people: data }
    }
}

import Link from "next/link";
import styles from "../../styles/People.module.css";


function People({people}) {
    return (
        <div>
            <h1>This is people page</h1>
            {people.map(person => (
                <div
                    key={person.id}>
                    <Link href={/people/ + person.id} person = {person}>
                        <a className = {styles.single}>
                            {person.name}
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default People;