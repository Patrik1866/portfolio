import Layout from "../components/Layout";
import "../src/app/globals.css";

const Contact = () => {
    return (
        <Layout>
            <h1 className="text-center text-2xl">Contact</h1>
            <div className="flex flex-col mt-7.5 gap-2 justify-self-center">
                <p className="text-start">Name: <a className="text-emerald-500" href="https://github.com/erdelyi">Erdélyi Patrik</a></p>
                <p className="text-start">Email: <a className="text-emerald-500">erdelyi.patrik99@gmail.com</a></p>
                <p className="text-start">Phone: <a className="text-emerald-500">30/254-3380</a></p>
                <p className="text-start">Github: <a className="text-emerald-500" target="_blank" href="https://github.com/Patrik1866">https://github.com/Patrik1866</a></p>
            </div>
        </Layout>
    );
}

export default Contact