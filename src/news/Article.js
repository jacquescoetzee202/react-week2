import { Component } from "react";
import axios from "../axios-config";


class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            article: null,
        }
    }

    componentDidMount() {
        axios.get(`/articles/${this.props.id}`).then(({data}) => {
            let article = data.data;
            this.setState({
                loaded: true,
                article: article,
            })
        })
    }

    render() {
        let { article, loaded } = this.state;

        return(
            <>
                { !loaded ? <p>Loading....</p> : <p>{ article.id }</p> }
            </>
        );
    }
}

export default Article;
