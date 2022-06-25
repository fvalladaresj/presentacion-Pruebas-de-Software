import React from "react";
import App from "../App";
import Enzyme, { mount, render, shallow, ReactWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { validator } from "../Validator";

Enzyme.configure({ adapter: new Adapter() });

describe("Pruebas", () => {
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

  it("Validar campos del formulario", () => {
    const defaultState = {
      name: "",
      lastname1: "",
      lastname2: "",
      email: "",
      phone: "",
    };
    const validatorResult = (fieldName, value) => {
      let errors = validator(
        {
          ...defaultState,
          [fieldName]: value,
        },
        fieldName
      );
      return errors[fieldName] ? errors[fieldName] == "" : true;
    };
    //Nombres
    expect(validatorResult("name", "")).toBe(false);
    expect(validatorResult("name", "Juan")).toBe(true);
    expect(validatorResult("name", "juan")).toBe(true);
    expect(validatorResult("name", "123")).toBe(false); //números
    expect(validatorResult("name", "juan123")).toBe(false); //letras y números
    expect(validatorResult("name", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")).toBe(false); //101 caracteres
    
    //Apellidos
    expect(validatorResult("lastname1", "")).toBe(false);
    expect(validatorResult("lastname1", "Juan")).toBe(true);
    expect(validatorResult("lastname1", "juan")).toBe(true);
    expect(validatorResult("lastname1", "123")).toBe(false); //números
    expect(validatorResult("lastname1", "juan123")).toBe(false); //letras y números
    expect(validatorResult("lastname1", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")).toBe(false); //101 caracteres
    expect(validatorResult("lastname2", "")).toBe(false);
    expect(validatorResult("lastname2", "Juan")).toBe(true);
    expect(validatorResult("lastname2", "juan")).toBe(true);
    expect(validatorResult("lastname2", "123")).toBe(false); //números
    expect(validatorResult("lastname2", "juan123")).toBe(false); //letras y números
    expect(validatorResult("lastname2", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")).toBe(false); //101 caracteres
  
    //Email
    expect(validatorResult("email", "")).toBe(false);
    expect(validatorResult("email", "Juan")).toBe(false);
    expect(validatorResult("email", "Juan@")).toBe(false);
    expect(validatorResult("email", "Juan@gmail")).toBe(false);    
    expect(validatorResult("email", "Juan@gmail.com")).toBe(true);
    
    //Telefono
    expect(validatorResult("phone", "")).toBe(false);
    expect(validatorResult("phone", "1")).toBe(false);
    expect(validatorResult("phone", "12345678")).toBe(true);
    expect(validatorResult("phone", "123456789")).toBe(false);
  });
});
