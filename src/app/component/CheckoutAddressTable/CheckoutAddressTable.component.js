import PropTypes from 'prop-types';
import MyAccountAddressTable from 'Component/MyAccountAddressTable/MyAccountAddressTable.component';
import Loader from 'Component/Loader';
import './CheckoutAddressTable.style';

class CheckoutAddressTable extends MyAccountAddressTable {
    static propTypes = {
        ...MyAccountAddressTable.propTypes,
        isSelected: PropTypes.bool,
        onClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        ...MyAccountAddressTable.defaultProps,
        isSelected: false
    };

    onAddressClick = () => {
        const { address, onClick } = this.props;
        onClick(address);
    };

    renderTable() {
        const { isSelected } = this.props;

        return (
            <button
              block="CheckoutAddressTable"
              elem="Button"
              type="button"
              mods={ { isSelected } }
              onClick={ this.onAddressClick }
            >
                { super.renderTable() }
            </button>
        );
    }

    render() {
        const { countries } = this.props;

        return (
            <div block="CheckoutAddressTable">
                <Loader isLoading={ !countries.length } />
                { this.renderTable() }
            </div>
        );
    }
}

export default CheckoutAddressTable;