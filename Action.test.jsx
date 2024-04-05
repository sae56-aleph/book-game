import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Action from "./src/components/Action";

//TEST ACTION
describe("Action", () => {
  // test("amène au bon onNextChapter après ActionDe", () => {
  //   const onNextChapter = vi.fn();
  //   const options = { targetSuccess: "1", targetFailure: "2" };
  //   render(
  //     <Action type="de" onNextChapter={onNextChapter} options={options} />
  //   );
  //   const actionDeComponent = screen.getByTestId("button");

  //   // Simule le clic sur l'action de dé
  //   fireEvent.click(actionDeComponent);

  //   // Vérifie que la fonction onNextChapter est appelée avec le bon argument
  //   expect(onNextChapter).toHaveBeenCalledWith("1");
  // });

  // test("amène au bon onNextChapter après ActionSimple", () => {
  //   const onNextChapter = vi.fn();
  //   const options = { target: "3", text: "Texte" };
  //   render(
  //     <Action type="simple" onNextChapter={onNextChapter} options={options} />
  //   );
  //   const actionSimpleComponent = screen.getByRole("button");

  //   // Simule le clic sur l'action simple
  //   fireEvent.click(actionSimpleComponent);

  //   // Vérifie que la fonction onNextChapter est appelée avec le bon argument
  //   expect(onNextChapter).toHaveBeenCalledWith("3");
  // });

  test("throws error for unknown action type", () => {
    const unknownType = "unknown";
    const error = console.error;
    console.error = vi.fn(); // Supprimer les messages d'erreur de la console

    // Vérifie que le composant lance une erreur pour un type d'action inconnu
    expect(() =>
      render(<Action type={unknownType} onNextChapter={() => {}} />)
    ).toThrowError(`Type d'action inconnu : ${unknownType}`);

    console.error = error; // Restaurer console.error
  });
});
