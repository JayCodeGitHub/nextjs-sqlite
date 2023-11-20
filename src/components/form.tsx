"use client"
import { useState } from "react";
import axios from "axios";


export default function Form() {
    const [error, setError] = useState<null | string>(null);
    const [form, setForm] = useState({
        title: '',
        content: '',
    });

    const validate = (form: any) => {
        if(!form.title) {
            return "Title is required"
        }

        if(!form.content) {
            return "Content is required"
        }
    }

    const updateField = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const error = validate(form)
        if(error) {
            setError(error);
            console.log(error);
            return
        }
        console.log(form)

        try {
            const { data } = await axios.post('/api/posts', form)
            console.log(data)
        } catch {
            setError('Error')
        }
}

    return (
      <form onSubmit={handleSubmit}>
         <input
            className="w-full"
            placeholder="Title"
            type="text"
            name="title"
            onChange={updateField}
            required
          />
          <textarea
            className="w-full"
            placeholder="Write something interesting..."
            name="content"
            onChange={updateField}
            required
          />
           <button
            type="submit"
            className="font-medium  px-3 py-1"
          >
            Create post
          </button>
      </form>
    )
}
