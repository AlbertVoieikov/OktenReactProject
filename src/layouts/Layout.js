import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <h2>Please here is your information</h2>
            <Outlet/>

        </div>
    );
};

export {Layout};