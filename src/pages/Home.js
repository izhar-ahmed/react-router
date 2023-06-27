import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }

    // if we use <a> tag instead of <Link> tag then it will reload the page.
    return (
        <>
            <h1>Home Page</h1>
            <p>Go to <Link to="products">Products list</Link></p>
            <button onClick={navigateHandler}>Navigate</button>
        </>
    );
}

export default Home;