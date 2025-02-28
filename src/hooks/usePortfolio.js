import { createContext, useContext } from "react";

const data = {
    name: "Aye Mya Thida",
    avatar_url: 'https://ui-avatars.com/api/?name=Aye+Mya+Thida',
    occupation: 'A full-stack developer',
    specialization: 'specialised in PHP, Python, JavaScript, Vue, React',
    github: 'https://github.com/AyemyaThi',
    linkedIn: 'https://www.linkedin.com/in/aye-mya-thida-b86201119',
    email: 'ayemya.thida87@gmail.com',
    year: 2025,
}
const PortfolioContext = createContext(data);

export const usePortfolio = () => useContext(PortfolioContext);

// export const PortfolioProvider = ({ children }) => {
//     return (
//       <PortfolioContext.Provider value={data}>
//         {children}
//       </PortfolioContext.Provider>
//     );
// };