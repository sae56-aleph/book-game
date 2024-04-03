import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LanceurDe from "./src/components/LanceurDe";

vi.useFakeTimers();

describe("LanceurDe", () => {
  test("renders button with correct text", () => {
    render(<LanceurDe />);
    const button = screen.getByRole("button", { name: /lancer le dé/i });
    expect(button).toBeInTheDocument();
  });

  test("calls onFinish function when button is clicked", () => {
    const onFinish = vi.fn();
    render(<LanceurDe onFinish={onFinish} />);
    const button = screen.getByRole("button", { name: /lancer le dé/i });

    fireEvent.click(button);

    // Avance le temps de 1 milliseconde pour déclencher le onFinish
    vi.advanceTimersByTime(1);

    // Vérifie que la fonction onFinish est appelée après le lancement du dé
    expect(onFinish).toHaveBeenCalled();
  });
});
