import { useState } from "react";

export default function Form() {

    const [form, setForm] = useState(null);


    return (
      <form>
         <input
            className="w-full"
            placeholder="Title"
            type="text"
            name="title"
            required
          />
          <textarea
            className="w-full"
            placeholder="Write something interesting..."
            name="content"
            required
          />
           <button
            type="submit"
            className="font-medium bg-sky-500 text-white px-3 py-1"
          >
            Create post
          </button>
      </form>
    )
}
  