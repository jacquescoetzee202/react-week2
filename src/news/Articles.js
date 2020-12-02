import { Component } from "react";
import axios from "../axios-config";

class Article extends Component {
    constructor() {
        super();

        this.state = {
            loaded: false,
            articles: [],
        }
    }

    componentDidMount() {
        axios.get("/articles").then(({data}) => {
            let articles = data.data;
            console.log(articles);
            this.setState({
                loaded: true,
                articles: articles,
            })
        })
    }

    render() {
        let { loaded, articles } =  this.state;

        return(
            <p>{loaded ? articles[0].id : "Loading....." }</p>
        );
    }
}

export default Article;