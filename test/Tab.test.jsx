import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./src/App";
import TabContainer from "./src/components/TabContainer";
import Tab from "./src/components/Tab";

const tabs = [
  { title: "Tab 1", icon: "icon1", content: "Contenu Tab 1" },
  { title: "Tab 2", icon: "icon2", content: "Contenu Tab 2" },
];

//TEST TAB
describe("Tab", () => {
  test("onClick fonctionnel lors du click sur le bouton", () => {
    const onClick = vi.fn();
    render(<Tab text="Tab 1" onClick={() => onClick()} />);
    const tabButton = screen.getByRole("button", { name: "Tab 1" });

    // Clique sur le bouton
    fireEvent.click(tabButton);

    // Vérifie que la fonction onClick a été appelée
    expect(onClick).toHaveBeenCalled();
  });
});
