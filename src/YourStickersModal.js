import React from "react";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { createMessage } from "./actions";
import StickersMarketplaceModal from "./StickersMarketplaceModal";

// const tokens = [
//   {
//     id: "0f56df69-11b9-40d4-b0ee-c37eab10c145",
//     name: "Cryptokitty #1",
//     url:
//       "https://steemitimages.com/DQmVLGFaHhUTUz9kLWF6RkT9C8z9Apr3FA4sWysTUQK2scT/kittydracula.png"
//   },
//   {
//     id: "d31dc424-7bed-4128-990c-4b77035ef205",
//     name: "Cryptokitty #2",
//     url:
//       "https://i2.wp.com/www.crypto-news.in/wp-content/uploads/2017/12/cryptokitties-cryptonews-hedwig.png"
//   },
//   {
//     id: "f70d4fc9-bb23-4e30-814e-1c34555a83ca",
//     name: "Axie #1",
//     url:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGDsi6Sqm2sBTJe7lUUlhW1kcrTO86zZeXq3yILRDNS6akZAWMA"
//   }
// ];

const YourStickersModal = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showStickersModal: false };

    this.handleClose = this.handleClose.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleClose() {
    this.setState({ showStickersModal: false });
  }

  handleSend(token) {
    this.props.createMessage({
      userIsSender: true,
      time: new Date(),
      imageUrl: token.image_url,
      type: "image"
    });
  }

  render() {
    const { show, handleClose, tokens } = this.props;
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your stifties</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {tokens.length !== 0 ? (
              tokens.map(token => (
                <Col xs={6} key={token.token_id}>
                  <Image src={token.image_url} responsive />
                  <Button
                    onClick={() => {
                      this.props.handleClose();
                      this.handleSend(token);
                    }}
                  >
                    Send
                  </Button>
                </Col>
              ))
            ) : (
              <div className="text-center pa-5">No stifties</div>
            )}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => this.setState({ showStickersModal: true })}
            className="fancy-buttons"
            bsStyle="primary"
          >
            Get stifties
          </Button>
          <StickersMarketplaceModal
            show={this.state.showStickersModal}
            handleClose={this.handleClose}
          />
        </Modal.Footer>
      </Modal>
    );
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createMessage: message => {
      dispatch(createMessage(message));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(YourStickersModal);
