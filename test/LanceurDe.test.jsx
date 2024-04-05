import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import LanceurDe from "../src/components/LanceurDe";
import { act } from "react-dom/test-utils";

//TEST LANCEURDE

describe("LanceurDe", () => {
  test("renders button with correct text", () => {
    render(<LanceurDe />);
    const button = screen.getByRole("button", { name: /lancer le dé/i });
    expect(button).toBeInTheDocument();
  });

  test("calls onFinish function when button is clicked", () => {
    vi.useFakeTimers();
    const onFinish = vi.fn();
    act(() => {
      render(<LanceurDe onFinish={onFinish} />);
    });
    const button = screen.getByRole("button", { name: /lancer le dé/i });
    act(() => {
      fireEvent.click(button);
      vi.runAllTimers();
      // vi.advanceTimersByTime(20000);
    });

    // act(() => {});
    expect(onFinish).toHaveBeenCalled();

    // Avance le temps de 1 milliseconde pour déclencher le onFinish

    // Vérifie que la fonction onFinish est appelée après le lancement du dé
  });
});
