var HelloBox = React.createClass({
    render: function () {
        return (
            React.createElement('span', null, 'hello world')
        );
    }
});

ReactDOM.render(
    React.createElement(HelloBox, null),
    document.getElementById('helloDiv')
);

var Table = React.createClass({

    render: function render() {

        var thead = React.DOM.thead(null,
            React.DOM.tr(null, React.DOM.th(null, 'Name'), React.DOM.th(null, 'Email')
            ));
        var rows = [];
        this.props.list.forEach(function (obj) {
            var row = [React.DOM.td(null, obj.name), React.DOM.td(null, obj.email)];
            rows.push(React.DOM.tr(null, row));
        });

        var tbody = React.DOM.tbody(null, rows);

        return React.DOM.table({}, [thead, tbody]);
    }

});

$(document).ready(function () {
    $.getJSON('/data.json').done(function (data) {
        ReactDOM.render(React.createElement(Table, data), document.querySelector("#nameTable"));
    });
});