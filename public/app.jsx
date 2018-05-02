var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React'
    };
  },
  render: function () {
    var name = this.props.name;

    return (
      <div>
        <h1>Hello {name}!!</h1>
        <p>This comes from se component!!</p>
      </div>
    );
  }
});

var firstName = "Jonathan";

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
