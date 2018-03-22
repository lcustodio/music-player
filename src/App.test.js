import React from "react";
import ReactDOM from "react-dom";
import {shallow} from 'enzyme';
import App from "./App";
import musics from "./resources/music";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App container", () => {
  it("should highlight current song", () => {
    const expected = shallow(<App musics={musics} />);
    expect(expected.state("currentSong")).toEqual({
      id: "1",
      title: "Bloom",
      artist: "Radiohead",
      album: "The King of Limbs",
      length: "5:15"
    });
  });
});
