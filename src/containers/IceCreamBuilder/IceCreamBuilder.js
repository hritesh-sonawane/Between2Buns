import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import IceCream from "../../components/IceCream/IceCream";
import BuildControls from "../../components/IceCream/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/IceCream/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class IceCreamBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }

  state = {
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    console.log(this.props);
    // axios.get('https://what-the-scoop-default-rtdb.firebaseio.com/flavors.json')
    //   .then(response => {
    //     this.setState({flavors: response.data});
    //   })
    //   .catch(error => {
    //     this.setState({error: true});
    //   });
  }

  updatePurchaseState(flavors) {
    const sum = Object.keys(flavors)
      .map((flvKey) => {
        return flavors[flvKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push("./checkout");
  };

  render() {
    const disableInfo = {
      ...this.props.flvs,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let orderSummary = null;
    let icecream = this.state.error ? (
      <p>Flavors couldn't be loaded!</p>
    ) : (
      <Spinner />
    );

    if (this.props.flvs) {
      icecream = (
        <Aux>
          <IceCream flavors={this.props.flvs} />
          <BuildControls
            flavorAdded={this.props.onFlavorAdded}
            flavorRemoved={this.props.onFlavorRemovd}
            disabled={disableInfo}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.flvs)}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          flavors={this.props.flvs}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.props.price}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {icecream}
      </Aux>
    );
  }
}

const mapDispatchToProps = (state) => {
  return {
    flvs: state.flavors,
    price: state.totalPrice,
  };
};

const mapStateToProps = (dispatch) => {
  return {
    onFlavorAdded: (flvName) =>
      dispatch({ type: actionTypes.ADD_FLAVOR, flavorName: flvName }),
    onFlavorRemovd: (flvName) =>
      dispatch({ type: actionTypes.REMOVE_FLAVOR, flavorName: flvName }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(IceCreamBuilder, axios));
