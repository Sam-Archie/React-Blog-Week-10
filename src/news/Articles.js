import axios from "../axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class Articles extends Component
{
    constructor(props)
    {
        super(props);
    
        this.state = {
            loaded: false,
            articles: [],

        }
    }

    componentDidMount()
    {
        axios.get("/articles/").then(({data}) => {
            this.setState({
                loaded: true,
                articles: data.data,
            });
        });
    }

    render()
    {
        const {articles, loaded } = this.state;
        
        return !loaded ? <h3>Please wait while we load you the articles!!! </h3> : (
            <div>
                <h1>Articles</h1>
                <ul className="list-group">
                    {articles.map((value, index) => (
                        <Link to={`/news/${value.id}`}>
                            <li className="list-group-item">
                            {value.title}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Articles;