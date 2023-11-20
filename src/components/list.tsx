"use client";
import { useState, useEffect } from "react";

export default function List() {
    const [data, setData] = useState<Array<{id: number, title: string, content: string}> | null>(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("/api/posts");
            const newData = await response.json();
            console.log(newData);
            setData(newData)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
  };

    return (
        <section>
        {data ? <span>
            <ul>
            {
                data.map(({id, title, content}) => (
                    <div key={id}>
                        <h2>
                            {title}
                        </h2>
                        <p>
                            {content}
                        </p>
                    </div>
                ))
            }
            </ul>
        </span> : <p>Loading ...</p>}
      </section>
    )
}
