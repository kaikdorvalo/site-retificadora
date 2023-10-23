
import { Carrusel } from "../../Components/Carrusel";
import { NavBar } from "../../Components/NavBar";

export const Home = () => {

    return (
        <div className="bg-primary w-screen h-screen">
            <header>
                <NavBar />
            </header>
            <main>
                <section>
                    <Carrusel />
                </section>
            </main>
        </div>
    )
}