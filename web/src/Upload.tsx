const Upload = () => {
    return (
        <form action={`${import.meta.env.VITE_API_URL}/upload`} method="post" encType="multipart/form-data">
            <input type="file" name="file" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Upload;