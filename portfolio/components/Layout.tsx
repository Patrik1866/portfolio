import Navbar from "./Navbar";

const Layout = ({ children }: {children: React.ReactNode}) => {    

    return (
        <>
            <Navbar />
            <main className="w-full max-w-4xl mx-auto p-10 border-1 border-emerald-400  rounded-2xl mt-9">{children}</main>
            <footer className="fixed bottom-0 w-full text-center py-2">2025 Patrik's Portfolio</footer>
        </>
    );
};
export default Layout;