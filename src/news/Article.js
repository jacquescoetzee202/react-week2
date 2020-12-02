const Article = ({ title, tags }) => (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        { title }
        <span className="badge badge-primary badge-pill">{ tags }</span>
    </li>
);

export default Article;