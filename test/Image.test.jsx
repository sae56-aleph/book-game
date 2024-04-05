import React from "react";
import Image from "../src/components/Image";
import { render, screen, fireEvent } from "@testing-library/react";

//TEST IMAGE
describe("Image", () => {
  test("renders image with correct URL", () => {
    const imageUrl = "/images/Capture_decran_2024-03-29_134218_-_Copie.png";
    render(<Image url={imageUrl} />);
    const imageElement = screen.getByRole("img");

    // Vérifie que l'élément image est rendu avec l'URL correcte
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", imageUrl);
  });
});
