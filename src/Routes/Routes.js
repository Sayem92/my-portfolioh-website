import { createBrowserRouter } from "react-router-dom";
import About from "../components/Home/About/About";
import Contact from "../components/Home/Contact/Contact";
import Home from "../components/Home/Home/Home";
import Myskills from "../components/Home/Myskills/Myskills";
import DetailsPage from "../components/Home/Projects/DetailsPage";
import Projects from "../components/Home/Projects/Projects";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/skills",
                element: <Myskills></Myskills>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/details",
                element: <DetailsPage></DetailsPage>
            },

        ]
    }
        
])