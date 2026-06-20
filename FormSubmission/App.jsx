export default function App() {

    function handleSubmit(event){
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const email = formData.get("email")
        const pwd = formData.get("password")
        console.log(`Email: ${email}`)
        console.log(`Password: ${pwd}`)
        formEl.reset()

    }
    return (
        <section>
            <h1>Signup Form</h1>
            <form onSubmit= {handleSubmit} method='post'>
                <label htmlFor="email">Email:</label>
                <input id="email" type='email' name="email" placeholder="kaju@barfi.com"></input>
                <br />
                <label htmlFor="password">Password</label>
                <input id="password" type='password' name="password"></input>
                <br />
                <button> Submit </button>
            </form>
        </section>
    )
}