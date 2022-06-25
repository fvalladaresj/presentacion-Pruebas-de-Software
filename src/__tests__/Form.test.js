import React from "react";
import App from "../App";
import Enzyme, { mount, render, shallow, ReactWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { TextField } from "@mui/material";

Enzyme.configure({ adapter: new Adapter() });

const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
  const input = wrapper.find("Form").dive().find(inputSelector);
  input.simulate("change", {
    target: { value: newValue },
  });
  return wrapper.find("Form").dive().find(inputSelector);
};

describe("Form", () => {
  it("Formulario añadir contacto vacío", () => {
    const wrapper = shallow(<App />);
    const addContactBtn = wrapper.find("#addContactBtn");
    // Open Modal
    addContactBtn.simulate("click");

    //Check Title
    expect(
      wrapper
        .find("Form")
        .dive()
        .find(".title")
        .text()
        .includes("Añadir contacto")
    ).toBe(true);

    //Check empty inputs
    expect(
      wrapper.find("Form").dive().find(".nameInput").props().defaultValue
    ).toEqual("");
    expect(
      wrapper.find("Form").dive().find(".lastname1Input").props().defaultValue
    ).toEqual("");
    expect(
      wrapper.find("Form").dive().find(".lastname2Input").props().defaultValue
    ).toEqual("");
    expect(
      wrapper.find("Form").dive().find(".emailInput").props().defaultValue
    ).toEqual("");
    expect(
      wrapper.find("Form").dive().find(".phoneInput").props().defaultValue
    ).toEqual("");
  });

  it("Editar usuario carga datos", () => {
    const wrapper = shallow(<App />);
    if (!wrapper.find("#rowName")) {
      const editContactBtn = wrapper.find("#editContactBtn").at(0);

      //initial values
      const name = wrapper.find("#rowName").at(0).text();
      const lastname1 = wrapper.find("#rowLastname1").at(0).text();
      const lastname2 = wrapper.find("#rowLastname2").at(0).text();
      const email = wrapper.find("#rowEmail").at(0).text();
      const phone = wrapper.find("#rowPhone").at(0).text();

      // Open Modal
      editContactBtn.simulate("click");

      //Check Title
      expect(
        wrapper
          .find("Form")
          .dive()
          .find(".title")
          .text()
          .includes("Editar contacto")
      ).toBe(true);

      //Check inputs
      expect(
        wrapper.find("Form").dive().find(".nameInput").props().defaultValue
      ).toEqual(name);
      expect(
        wrapper.find("Form").dive().find(".lastname1Input").props().defaultValue
      ).toEqual(lastname1);
      expect(
        wrapper.find("Form").dive().find(".lastname2Input").props().defaultValue
      ).toEqual(lastname2);
      expect(
        wrapper.find("Form").dive().find(".emailInput").props().defaultValue
      ).toEqual(email);
      expect(
        "+569 " +
          wrapper.find("Form").dive().find(".phoneInput").props().defaultValue
      ).toEqual(phone);
    }
  });

  it("Eliminar usuario", () => {
    const wrapper = shallow(<App />);
    if (!wrapper.find("#rowName")) {
      const deleteContactBtn = wrapper.find("#deleteContactBtn").at(0);

      //initial values
      const name = wrapper.find("#rowName").at(0).text();
      const lastname1 = wrapper.find("#rowLastname1").at(0).text();
      const lastname2 = wrapper.find("#rowLastname2").at(0).text();
      const email = wrapper.find("#rowEmail").at(0).text();
      const phone = wrapper.find("#rowPhone").at(0).text();

      // Open Modal
      deleteContactBtn.simulate("click");

      //Check user deleted
      if (!wrapper.find("#rowName")) {
        expect({
          name: wrapper.find("#rowName").at(0).text(),
          lastname1: wrapper.find("#rowLastname1").at(0).text(),
          lastname2: wrapper.find("#rowLastname2").at(0).text(),
          email: wrapper.find("#rowEmail").at(0).text(),
          phone: wrapper.find("#rowPhone").at(0).text(),
        }).not.toEqual({
          name: name,
          lastname1: lastname1,
          lastname2: lastname2,
          email: email,
          phone: phone,
        });
      }
    }
  });

});
