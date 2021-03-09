import axios from "../axios";
import { Component } from "react";

class Article extends Component
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
        const {id} = this.props;
        axios.get(`/articles/${id}`).then(({data}) => {
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
                    <h4>{articles.title}</h4>
                <li className="list-group-item">
                    <p>{articles.content}</p>
                </li>
            </ul>
        </div>
        )
    }

}

export default Article;