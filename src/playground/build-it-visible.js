class VisiblityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visiblity: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visiblity: !prevState.visiblity
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visiblity ? 'Hide details' : 'Show details'}</button>
                {this.state.visiblity && (<p>Hey. These are some details you can now see!</p>)}
            </div>
        )
    }
}

ReactDOM.render(<VisiblityToggle />, document.getElementById('app'));