import { render, screen, fireEvent } from "@testing-library/react";
import TabContainer from "../src/components/TabContainer";

const tabs = [
  { title: "Tab 1", icon: "icon1", content: "Contenu Tab 1" },
  { title: "Tab 2", icon: "icon2", content: "Contenu Tab 2" },
];

//TEST TABCONTAINER
describe("TabContainer", () => {
  test("rendu TabContainer correct", () => {
    const { getByText } = render(<TabContainer tabs={tabs} />);

    // Vérifie que les titres des onglets sont rendus correctement
    expect(getByText("Tab 1")).toBeInTheDocument();
    expect(getByText("Tab 2")).toBeInTheDocument();

    // Vérifie que le contenu du premier onglet est rendu par défaut
    expect(getByText("Contenu Tab 1")).toBeInTheDocument();
    screen.debug();
  });

  test("changement d'onglet lors du click", () => {
    const { getByText } = render(<TabContainer tabs={tabs} />);

    // Clique sur le deuxième onglet
    fireEvent.click(getByText("Tab 2"));

    // Vérifie que le contenu du deuxième onglet est rendu
    expect(getByText("Contenu Tab 2")).toBeInTheDocument();
    screen.debug();
  });
});
