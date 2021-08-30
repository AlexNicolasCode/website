export default function Introduction() {
    return (
        <section className="flex flex-col justify-center h-screen bg-center text-center">
            <article>
                <h1 className="text-3xl"><strong>Hi! My name is Alex</strong></h1>
                <h2 className="text-2xl">Welcome To My Website</h2>
            </article>

            <a href="#projects">
                <button
                    className="border-2 p-4 border-black mt-4 text-base text-black w-40
                    hover:bg-black hover:border-0 hover:text-gray-100 transition duration-500 ease-in-out"
                >
                    See My Work
                </button>
            </a>
        </section>
    );
}