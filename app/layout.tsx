import "../styles/global.css";



export const metadata = {
    title: "Pawan kumar",
    description: "My portfolio website",
};

const RootLayout = ({ children }) => (
    
    <html lang='en'>
        <body>
            <div>
                {children}
            </div>
        </body>
    </html>
);

export default RootLayout;
