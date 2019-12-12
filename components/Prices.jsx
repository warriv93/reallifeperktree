class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render () {
        let list = '';
        let currentCurrency = '';

        switch (this.state.currency) {
            case 'USD':
                currentCurrency = this.props.bpi.USD;
                break;
            case 'EUR':
                currentCurrency = this.props.bpi.EUR;
                break;
            case 'GBP':
                currentCurrency = this.props.bpi.GBP;
                break;
            default:
                currentCurrency = this.props.bpi.USD;
                break;
        }

        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        Bitcoin rate for {currentCurrency.description} : <span className="badge badge-primary">{currentCurrency.code}</span> 
                        <strong>{currentCurrency.rate}</strong>
                    </li>
                </ul>
                <br/>
                <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
                <br/>
                <p>{this.props.disclaimer}</p>
            </div>
        );
    }
}

export default Prices;