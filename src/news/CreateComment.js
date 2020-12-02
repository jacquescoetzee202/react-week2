import { Component } from "react";
import Form from "../passing-up-data/Form";
import axios from "../axios-config";


class CreateComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posted: false,
            comment: {},
        }
        
        this.putRequest = this.putRequest.bind(this);
        this.commentSubmit = this.commentSubmit.bind(this);

    }

    putRequest(commentObj) {
        axios.post(`/articles/${this.props.articleID}/comments`, commentObj).then(({data}) => {
            let comment = data.data;
            this.setState({
                posted: true,
                comment: comment,
            })
        });
    }

    commentSubmit({ email, content }) {
        let comment = {
            comment: content,
            email: email,
        }
        this.putRequest(comment);
    }

    render() {
        let { posted, comment } = this.state;
        return(
            <>
                { posted ? <p>Comment has been posted "{comment["comment"]}"</p> : 
                    <Form 
                        handleSubmit={ this.commentSubmit }
                        fields={ [
                            { label: "Email", name: "email", type: "email" },
                            { label: "Comment", name: "content", type: "text" },
                        ]}
                        submit="Add Comment"
                    />
                }
            </>
        );
    }


}

export default CreateComment;