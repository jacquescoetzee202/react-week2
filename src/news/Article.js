import { Component } from "react";
import axios from "../axios-config";
import Tag from "./Tag";


class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            article: {},
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
        let { title, content, tags } = article;

        return(
            <>
                { !loaded ? <p>Loading....</p> : 
                    <div className="containter">
                        <h2>{ title }</h2>
                        <p>{ content }</p>
                        <div className="d-flex justify-content-end">
                            {tags.map((tag, index) => {
                                return (
                                    <Tag
                                        tag={ tag }
                                        key={ index }
                                    />
                                );
                            })}
                        </div> 
                    </div>
                }
            </>
        );
    }
}

export default Article;
