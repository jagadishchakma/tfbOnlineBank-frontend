import { AuthContext } from '@/js/AuthContext';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Inter } from "next/font/google";
import { useContext, useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });
const Layout = ({children}) => {
    const {setToggler} = useContext(AuthContext)
    useEffect(()=>{
        setToggler(false);
    },[])
    return (
        <html lang="en">
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
            </head>
            <body className={inter.className}>
                {children}
                <ProgressBar color="#D97142" size="5"/>
                <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
            </body>
        </html>
    );
};

export default Layout;