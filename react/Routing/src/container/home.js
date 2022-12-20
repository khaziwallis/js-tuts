const Home = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ border: '10px solid black', padding: 10,  margin: '5px 5px 5px 5px' }}>
                <nav>
                    <ul>
                        <li>
                            <a href="#home">Jump to #header</a>
                            {
                                //<a href="#/home/#home">Jump to #header</a>
                            }
                        </li>
                        <li>
                            <a href="#body">Jump to #body</a>
                            {
                                //<a href="#/home/#body">Jump to #body</a>
                            }
                        </li>
                        <li>
                            <a href="#footer">Jump to #footer</a>
                            {
                                //<a href="#/home/#footer">Jump to #footer</a>
                            }
                        </li>
                    </ul>
                </nav>
            </div>
            <div style={{ textAlign: 'center', border: '10px solid blue', width: 750,  margin: '5px 5px 5px 5px' }}>
                <div id="header" style={{ height: 500 }}>Home</div>
                <div id="body" style={{ height: 500 }}>Home Body</div>
                <div id="footer" style={{ height: 500 }}>Home Footer</div>
            </div>
        </div>
    )
};

export default Home;