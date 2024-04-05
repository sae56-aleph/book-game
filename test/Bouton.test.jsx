import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Bouton from "../src/components/Bouton";

//TEST BOUTON
describe("Bouton", () => {
  test("onClick sur le bouton lors du click", () => {
    // Crée un mock de la fonction onClick
    const onClick = vi.fn();

    // Rend le composant Bouton avec le mock onClick
    render(<Bouton text="Click Me" onClick={onClick} />);
    const button = screen.getByRole("button", { name: "Click Me" });

    // Clique sur le bouton
    fireEvent.click(button);

    // Vérifie que la fonction onClick a été appelée
    expect(onClick).toHaveBeenCalled();
  });

  test("Quand le bouton est disbled", () => {
    // Crée un mock de la fonction onClick
    const onClick = vi.fn();

    // Rend le composant Bouton avec le mock onClick et désactivé
    render(<Bouton text="Click Me" onClick={onClick} isDisabled={true} />);
    const button = screen.getByRole("button", { name: "Click Me" });

    // Clique sur le bouton
    fireEvent.click(button);

    // Vérifie que la fonction onClick n'a pas été appelée car le bouton est désactivé
    expect(onClick).not.toHaveBeenCalled();
  });

  test("rend le bouton en disabled quand isDisabled is true", () => {
    render(<Bouton text="Click Me" isDisabled={true} />);
    const button = screen.getByRole("button", { name: "Click Me" });

    // Vérifie que le bouton est rendu comme désactivé
    expect(button).toBeDisabled();
  });

  test("rend le bouton en enabled quand isDisabled is false", () => {
    render(<Bouton text="Click Me" isDisabled={false} />);
    const button = screen.getByRole("button", { name: "Click Me" });

    // Vérifie que le bouton est rendu comme activé
    expect(button).not.toBeDisabled();
  });
});
