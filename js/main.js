var Nav = React.createClass({
    displayName: "Nav",

    render: function () {
        return React.createElement(
            "nav",
            { className: "navbar navbar-inverse" },
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "navbar-header" },
                    React.createElement(
                        "a",
                        { href: this.props.linkUrl, className: "navbar-brand" },
                        this.props.title
                    )
                )
            )
        );
    }
});

var Title = React.createClass({
    displayName: "Title",

    render: function () {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Nav, { title: "GitHub", linkUrl: "https://github.com/Alberto19" }), document.getElementById('nav'));

ReactDOM.render(React.createElement(Title, { title: "My component title!" }), document.getElementById('title'));