import {FormEvent} from "react";

const Upload = () => {
    const submitForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        await fetch(`${import.meta.env.VITE_API_URL}/upload`, {
            method: 'POST',
            body: formData
        })
    };

    return (
        <form onSubmit={submitForm}>
            <input type="file" name="file" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Upload;