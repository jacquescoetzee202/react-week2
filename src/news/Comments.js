import { Component } from "react";
import axios from "../axios-config";

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            comments: [],
        }
    }
    componentDidMount() {
        axios.get(`/articles/${this.props.articleID}/comments`).then(({data}) => {
            let comments = data.data;
            this.setState({
                loaded: true,
                comments: comments,
            })
        })
    }

    render() {
        let { loaded, comments } = this.state;

        return(
            <>
                { comments.length > 0 ? <h3>Comments</h3> : <h3>Be the first to comment!</h3> }
                { !loaded ? <p>Loading comments....</p> : 
                    <ul className="list-group">
                        {comments.map( commentObj => {
                            let { comment, id, email } = commentObj;
                            return(
                                <li 
                                    className="list-group-item justify-content-between"
                                    key={ id }
                                >
                                    <p className="font-weight-bold">{ email }</p>
                                    <p>{ comment }</p>
                                </li>
                            );
                        })}
                    </ul>
                }
            </>

            
        );
    }
}


export default Comments;