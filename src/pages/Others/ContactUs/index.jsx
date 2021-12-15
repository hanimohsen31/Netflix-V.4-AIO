export const ContactUs = () => {
    return (
        <>
        <form className="container">

            <div className="mb-3">
                <label for="textarea" className="form-label">Write Yor Question Here</label>
                <textarea id="textarea" className="form-control" aria-label="With textarea"></textarea>
            </div>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
    )
}