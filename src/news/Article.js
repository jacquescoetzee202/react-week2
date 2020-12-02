import { Component } from "react";
import axios from "../axios-config";
import Tag from "./Tag";
import Comments from "./Comments";
import CreateComment from "./CreateComment";



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
        let { title, content, tags, id } = article;

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
                        <Comments articleID={ id }/>
                        <CreateComment articleID={ id }/> 
                    </div>
                }
            </>
        );
    }
}

export default Article;
