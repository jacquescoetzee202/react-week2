import { Component } from "react";
import Form from "../passing-up-data/Form";
import axios from "../axios-config";


class CreateArticle extends Component {
    constructor() {
        super();

        this.state = {
            posted: false,
            article: {},
        }
        
        this.putRequest = this.putRequest.bind(this);
        this.articleSubmit = this.articleSubmit.bind(this);

    }

    putRequest(articleObj) {
        axios.post("/articles", articleObj).then(({data}) => {
            let article = data.data;
            this.setState({
                posted: true,
                article: article,
            })
        });
    }

    articleSubmit({ title, content, tags }) {
        let tagsArray = tags.split(/\s*,\s*/);
        let article = {
            title: title,
            content: content,
            tags: tagsArray,
        }
        this.putRequest(article);
    }

    render() {
        let { posted, article } = this.state;
        return(
            <>
                { posted ? <p>Article has been posted "{article.name}" id:{article.id}</p> : 
                    <Form 
                        handleSubmit={ this.articleSubmit }
                        fields={ [
                            { label: "Title", name: "title", type: "text" },
                            { label: "Article", name: "content", type: "text" },
                            { label: "Tags", name: "tags", type: "text" },
                        ]}
                        submit="Create"
                    />
                }
            </>
        );
    }


}

export default CreateArticle;
