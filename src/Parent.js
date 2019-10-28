import React from "react";
import SelectColour from "./SelectColour";
import getDefaultColour from "./utils/selectColorHelper";


export default class Parent extends React.Component {
  state = {
    defaultSize: "",
    selectedColour: "",
    availableColours: [],
    allImages: {},
    availableSizes: {},
    selectedImageUrl: ""
  };

  componentDidMount() {
    fetch('https://all.data.alexbooster.com/json/trainers.json')
    .then(response => response.json())
    .then(data => {
      const defaultColour = getDefaultColour(data[0].byColor, 9);
      const defaultImageUrl = data[0].allImages[defaultColour];

      this.setState(
        {
          selectedColour: defaultColour,
          availableColours: data[0].allColors,
          allImages: data[0].allImages,
          availableSizes: data[0].byColor,
          selectedImageUrl: defaultImageUrl
        },
        () => {
            console.log(this.state)
        }
      );
    })
        

  }

  onChangeColour = selectedColour => {
    const newSelectedImage = this.state.allImages[selectedColour];
    this.setState({
      selectedColour: selectedColour,
      selectedImageUrl: newSelectedImage
    });
  };

  render() {
    const {
      availableSizes,
      availableColours,
      selectedColour,
      selectedImageUrl
    } = this.state;

    return (
      <>
        <h1>Trainers</h1>
        {selectedColour && (
          <SelectColour
            selectedColour={selectedColour}
            colours={availableColours}
            onChangeHandler={this.onChangeColour}
          />
        )}
        {availableSizes && selectedColour && (
          <div className="parent">
            <select>
              {availableSizes[selectedColour].map(size => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}
        <img src={selectedImageUrl} alt="shoes pic" />
      </>
    );
  }
}